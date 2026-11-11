const fs = require("fs");
const path = require("path");
const T = require(path.join(__dirname, "tokens-kit.js"));
let pass = 0, fail = 0;
function ok(n, c, e) { c ? (pass++, console.log("PASS  " + n + (e ? "  (" + e + ")" : ""))) : (fail++, console.log("FAIL  " + n + (e ? "  (" + e + ")" : ""))); }
function near(a, b, tol) { return Math.abs(a - b) <= tol; }
const isColour = (v) => typeof v === "string" && /^(#[0-9a-f]{6}|rgba?\([\d., ]+\))$/.test(v);

/* ---------- shape ---------- */
ok("version is a string", typeof T.version === "string", T.version);
ok("light has 187 colour values", Object.keys(T.light).length === 187, Object.keys(T.light).length);
ok("dark has 187 colour values", Object.keys(T.dark).length === 187, Object.keys(T.dark).length);
ok("121 colour token names", T.names.length === 121, T.names.length);
ok("19 scale fields", Object.keys(T.scale).length === 19);
ok("3 shadow levels", Object.keys(T.shadows).length === 3);
ok("every name resolves in light", T.names.every((n) => isColour(T.light[n])), T.names.filter((n) => !isColour(T.light[n])).join(","));
ok("every name resolves in dark", T.names.every((n) => isColour(T.dark[n])), T.names.filter((n) => !isColour(T.dark[n])).join(","));
ok("light and dark actually differ", T.light.BgBase !== T.dark.BgBase && T.light.Text !== T.dark.Text);
ok("no name is a palette scale", !T.names.some((n) => /^(Blue|Red|Gold|Volcano|Magenta|Purple|Geekblue|Cyan|Lime|Orange|Yellow)\d+$/.test(n)));

/* ---------- parse ---------- */
ok("parse hex", JSON.stringify(T.parse("#1f1f1f")) === JSON.stringify({ r: 31, g: 31, b: 31, a: 1 }));
ok("parse rgba", T.parse("rgba(0, 0, 0, 0.44)").a === 0.44);
ok("parse 8-digit hex", near(T.parse("#00000080").a, 0.502, 0.01));
ok("parse rejects nonsense", T.parse("not a colour") === null);
ok("parse rejects a number", T.parse(5) === null);
ok("toCss hex round-trip", T.toCss(T.parse("#57abf9")) === "#57abf9");
ok("toCss keeps alpha", /^rgba\(0, 0, 0, 0\.44\)$/.test(T.toCss(T.parse("rgba(0, 0, 0, 0.44)"))));

/* ---------- mix ---------- */
const a = "#000000", b = "#ffffff";
ok("mix at 0 is the first colour", T.toCss(T.mix(a, b, 0)) === "#000000");
ok("mix at 1 is the second", T.toCss(T.mix(a, b, 1)) === "#ffffff");
ok("mix at 0.5 is the middle", T.toCss(T.mix(a, b, 0.5)) === "#808080", T.toCss(T.mix(a, b, 0.5)));
ok("mix clamps below 0", T.toCss(T.mix(a, b, -3)) === "#000000");
ok("mix clamps above 1", T.toCss(T.mix(a, b, 9)) === "#ffffff");
ok("mix is premultiplied, not naive", (function () {
  /* a transparent colour must not darken the result: mixing clear black into
     opaque white stays white, which a naive channel average would not do. */
  const out = T.mix("rgba(0, 0, 0, 0)", "#ffffff", 0.5);
  return out.r === 255 && out.g === 255 && out.b === 255 && near(out.a, 0.5, 0.001);
})(), JSON.stringify(T.mix("rgba(0, 0, 0, 0)", "#ffffff", 0.5)));
ok("mix of two transparent colours is transparent", T.mix("rgba(0,0,0,0)", "rgba(0,0,0,0)", 0.5).a === 0);
ok("mix accepts parsed colours", T.mix(T.parse("#000000"), T.parse("#ffffff"), 0.5).r === 128);

/* ---------- contrast ---------- */
ok("white on black is 21:1", near(T.contrast("#ffffff", "#000000"), 21, 0.05), T.contrast("#ffffff", "#000000"));
ok("a colour against itself is 1:1", near(T.contrast("#57abf9", "#57abf9"), 1, 0.01));
ok("light body text passes AAA", T.contrast(T.light.Text, T.light.BgBase) >= 7, T.contrast(T.light.Text, T.light.BgBase));
ok("dark body text passes AAA", T.contrast(T.dark.Text, T.dark.BgBase) >= 7, T.contrast(T.dark.Text, T.dark.BgBase));
ok("contrast composites a translucent colour first", (function () {
  const solid = T.contrast(T.light.BgBase, T.light.BgBase);
  const translucent = T.contrast("rgba(255, 255, 255, 0.5)", T.light.BgBase, "#000000");
  return translucent > solid;
})());

/* ---------- shadows ---------- */
const modalLight = T.shadow("modal", "light");
const modalDark = T.shadow("modal", "dark");
ok("modal shadow has five layers plus the ring", modalLight.split("), ").length >= 5, modalLight.split(",").length + " parts");
ok("light ring is black at 5%", /0 0 0 1px rgba\(0, 0, 0, 0\.05\)$/.test(modalLight));
ok("dark ring is white at 18%", /0 0 0 1px rgba\(255, 255, 255, 0\.18\)$/.test(modalDark));
ok("tooltip shadow is the smallest", T.shadow("tooltip", "light").split(",").length < T.shadow("modal", "light").split(",").length);
ok("popover alias resolves", T.shadow("popover", "light") === T.shadow("BoxShadowSecondary", "light"));
ok("unknown level is none", T.shadow("nope", "light") === "none");

/* ---------- derived tokens ---------- */
ok("fillBorder light is Fill", T.fillBorder("light") === T.light.Fill);
ok("fillBorder dark is FillSecondary", T.fillBorder("dark") === T.dark.FillSecondary);
ok("fillBorderStrong dark is Fill", T.fillBorderStrong("dark") === T.dark.Fill);
ok("fillBorderStrong light is a mix", /^rgba?\(/.test(T.fillBorderStrong("light")), T.fillBorderStrong("light"));

/* ---------- css vars ---------- */
const vars = T.cssVars("light");
ok("vars cover every colour plus scale", Object.keys(vars).length === 187 + 19 + 3, Object.keys(vars).length);
ok("default prefix", "--lobe-BgContainer" in vars);
ok("custom prefix", "--x-Text" in T.cssVars("dark", "--x-"));
ok("scale gets px", vars["--lobe-BorderRadius"] === "8px", vars["--lobe-BorderRadius"]);
ok("font weight stays unitless", vars["--lobe-FontWeightStrong"] === 600);
ok("shadows are exported", typeof vars["--lobe-shadow-modal"] === "string");
ok("cssText is a declaration list", T.cssText("light").split("\n").every((l) => /^--[\w-]+: .+;$/.test(l)));

/* ---------- apply, and the opt-in guarantee ---------- */
function fakeEl() {
  const props = {};
  return {
    props,
    style: { setProperty(k, v) { props[k] = v; } },
    attrs: {},
    setAttribute(k, v) { this.attrs[k] = v; }
  };
}
const el = fakeEl();
const n = T.apply(el, "dark");
ok("apply writes every variable", n === 209, n);
ok("apply sets the mode attribute", el.attrs["data-lobe-theme"] === "dark");
ok("apply tolerates a missing element", T.apply(null, "light") === 0);
ok("apply tolerates a bare object", T.apply({}, "light") === 0);

const src = fs.readFileSync(path.join(__dirname, "tokens-kit.js"), "utf8");
ok("the kit never touches document", !/document\./.test(src));
// The rule used to be "the source never mentions window", which was true while this kit
// was data only. Motion reads window.matchMedia to honour prefers-reduced-motion, guarded
// by a typeof check and only when a caller asks — so the rule is now what it always meant:
// no unconditional window access at load. The proof is that this file runs in Node, where
// there is no window at all, and every case above passed.
ok("no top-level window access", !/^\s*(var|let|const)?\s*[^\n]*window\./m.test(src.replace(/function[\s\S]*?\n  \}/g, "")));
ok("no auto-apply on load", !/^\s*T\.apply\(/m.test(src));
ok("no localStorage", !/localStorage/.test(src));

console.log("\n" + pass + " passed, " + fail + " failed");


/* =====================================================================
 * Motion, merged in from motion-kit on 2026-11-12.
 *
 * motion-kit's own cases, run against T.motion on the merged kit.
 * ===================================================================== */
const Tokens = require(require("path").join(__dirname, "tokens-kit.js"));
let mpass = 0, mfail = 0;
function mok(n, c, e) { c ? (mpass++, console.log("PASS  " + n + (e ? "  (" + e + ")" : ""))) : (mfail++, console.log("FAIL  " + n + (e ? "  (" + e + ")" : ""))); }
function mnear(a, b, tol) { return Math.abs(a - b) <= tol; }

/* ---------- shape ---------- */
mok("motion carries a version", typeof Tokens.motion.version === "string", Tokens.motion.version);
mok("three durations", Tokens.motion.DURATION.fast === 100 && Tokens.motion.DURATION.mid === 200 && Tokens.motion.DURATION.slow === 300);

/* ---------- cubic-bezier ---------- */
const out = Tokens.motion.ease.out;
mok("ease.out(0) is 0", out(0) === 0);
mok("ease.out(1) is 1", out(1) === 1);
mok("ease.out is monotonic", (function () {
  let last = -1;
  for (let p = 0; p <= 1.0001; p += 0.01) { const v = out(p); if (v < last - 1e-9) return false; last = v; }
  return true;
})());
mok("ease.out css string", out.css === "cubic-bezier(0.215, 0.61, 0.355, 1)", out.css);
mok("ease.out is front-loaded", out(0.25) > 0.25, "f(0.25)=" + out(0.25).toFixed(3));
mok("ease.inOut is symmetric about 0.5", mnear(Tokens.motion.ease.inOut(0.5), 0.5, 0.02), Tokens.motion.ease.inOut(0.5).toFixed(4));
mok("outBack overshoots past 1", (function () {
  for (let p = 0; p < 1; p += 0.01) if (Tokens.motion.ease.outBack(p) > 1) return true;
  return false;
})());
mok("every named curve resolves", ["soft", "exit", "out", "inOut", "outBack", "outQuint", "outCirc", "css", "cssIn", "toast", "linear"].every(function (n) {
  return typeof Tokens.motion.ease[n] === "function" && Tokens.motion.ease[n](0.5) >= 0;
}));
mok("ease.linear is the identity", mnear(Tokens.motion.ease.linear(0.37), 0.37, 0.002), Tokens.motion.ease.linear(0.37).toFixed(4));
mok("custom curve", Tokens.motion.cubicBezier(0, 0, 1, 1)(0.5) > 0.4);

/* ---------- springs ---------- */
const smooth = Tokens.motion.smooth(300);
mok("smooth(300) has unit mass", smooth.mass === 1);
mok("smooth(300) stiffness is omega squared", mnear(smooth.damping * smooth.damping, 4 * smooth.stiffness, 1e-6),
  "k=" + smooth.stiffness.toFixed(1) + " c=" + smooth.damping.toFixed(1));
mok("smooth(300) is critically damped", mnear(smooth.damping / (2 * Math.sqrt(smooth.stiffness * smooth.mass)), 1, 0.01),
  "zeta=" + (smooth.damping / (2 * Math.sqrt(smooth.stiffness))).toFixed(3));

const s = Tokens.motion.spring(smooth);
mok("spring starts at 0", s.at(0) === 0);
mok("spring is ~1 at the settle time", mnear(s.at(300), 1, 0.002), s.at(300).toFixed(5));
mok("spring settles near the requested 300ms", s.settle(0.001) >= 295 && s.settle(0.001) <= 320, s.settle(0.001) + "ms");
mok("spring never overshoots when critically damped", (function () {
  for (let ms = 0; ms <= 300; ms += 5) if (s.at(ms) > 1.0001) return false;
  return true;
})());

const bouncy = Tokens.motion.spring(Tokens.motion.bouncy(280));
mok("bouncy overshoots", (function () {
  for (let ms = 0; ms <= 280; ms += 2) if (bouncy.at(ms) > 1.005) return true;
  return false;
})());
mok("bouncy still lands on 1", mnear(bouncy.at(280), 1, 0.01), bouncy.at(280).toFixed(4));
mok("bouncy settles at its requested 280ms", bouncy.settle(0.003) >= 275 && bouncy.settle(0.003) <= 300, bouncy.settle(0.003) + "ms");
mok("bouncy is under-damped", bouncy.zeta < 1, "zeta=" + bouncy.zeta.toFixed(3));
mok("snappy is between", Tokens.motion.spring(Tokens.motion.snappy(250)).zeta > 0.7 && Tokens.motion.spring(Tokens.motion.snappy(250)).zeta < 1);

const thumb = Tokens.motion.spring(Tokens.motion.SWITCH_THUMB);
mok("switch thumb spring matches lobe constants", Tokens.motion.SWITCH_THUMB.stiffness === 360 && Tokens.motion.SWITCH_THUMB.damping === 24);
mok("switch thumb settles quickly", thumb.settle(0.01) < 700, thumb.settle(0.01) + "ms");
mok("unitSettle agrees with stepResponse", (function () {
  const t = Tokens.motion.unitSettle(1, 0.001);
  return Math.abs(Tokens.motion.stepResponse(1, t) - 1) > 0.0009;
})());
mok("over-damped spring never overshoots", (function () {
  const st = Tokens.motion.spring({ stiffness: 100, damping: 40, mass: 1 });
  for (let ms = 0; ms <= 2000; ms += 10) if (st.at(ms) > 1.0001) return false;
  return true;
})());

/* ---------- tween ---------- */
const tw = Tokens.motion.tween(0, 100, { duration: 200, ease: "linear" });
mok("tween starts at from", tw(0) === 0);
mok("tween ends at to", tw(200) === 100);
mok("tween midpoint with linear", mnear(tw(100), 50, 0.001));
mok("tween clamps past the end", tw(999) === 100);
const tw2 = Tokens.motion.tween(10, 20, { duration: 0 });
mok("zero duration jumps", tw2(0) === 20);
mok("tween records its duration", tw.duration === 200);

/* ---------- transition presets ---------- */
const popup = Tokens.motion.transition.popup();
mok("popup timings", popup.duration === 150 && popup.exitDuration === 75);
mok("popup scale", popup.enter.scale === 0.96 && popup.enter.y === -6 && popup.enter.flip === true);
mok("popup exit uses cssIn", popup.exitEase === Tokens.motion.ease.cssIn);

const modal = Tokens.motion.transition.modal();
mok("modal timings", modal.duration === 220 && modal.exitDuration === 120);
mok("modal enter/exit scale differ", modal.enter.scale === 0.97 && modal.exit.scale === 0.98);
mok("modal uses the soft curve", modal.ease === Tokens.motion.ease.soft);

const backdrop = Tokens.motion.transition.backdrop();
mok("backdrop timings", backdrop.duration === 180 && backdrop.ease === Tokens.motion.ease.soft);

const right = Tokens.motion.transition.drawer(Tokens.motion.SIDE.right);
const left = Tokens.motion.transition.drawer(Tokens.motion.SIDE.left);
const top = Tokens.motion.transition.drawer(Tokens.motion.SIDE.top);
const bottom = Tokens.motion.transition.drawer(Tokens.motion.SIDE.bottom);
mok("drawer timings", right.duration === 300 && right.exitDuration === 220);
mok("drawer right starts off the right edge", right.enter.xPercent === 100 && right.enter.yPercent === 0);
mok("drawer left starts off the left edge", left.enter.xPercent === -100);
mok("drawer top starts above", top.enter.yPercent === -100 && top.enter.xPercent === 0);
mok("drawer bottom starts below", bottom.enter.yPercent === 100);
mok("drawer keeps full opacity", right.enter.opacity === 1);

const toastBottom = Tokens.motion.transition.toast(Tokens.motion.SIDE.bottom);
const toastTop = Tokens.motion.transition.toast(Tokens.motion.SIDE.top);
mok("toast timings", toastBottom.duration === 400 && toastBottom.ease === Tokens.motion.ease.toast);
mok("toast from bottom slides up", toastBottom.enter.yPercent === 150);
mok("toast from top slides down", toastTop.enter.yPercent === -150);

const collapse = Tokens.motion.transition.collapse();
mok("collapse timings", collapse.duration === 200 && collapse.ease === Tokens.motion.ease.out);
mok("collapse flags and offsets", collapse.enter.collapse === true && collapse.enter.y === 6 && collapse.exit.y === -6);

const tooltip = Tokens.motion.transition.tooltip();
mok("tooltip exits fast", tooltip.exitDuration === 100 && tooltip.exitEase === Tokens.motion.ease.exit);
mok("tooltip carries a spring", tooltip.spring && tooltip.spring.stiffness > 0);

/* ---------- toward ---------- */
const up = Tokens.motion.toward(Tokens.motion.transition.popup(), Tokens.motion.SIDE.top);
mok("toward(top) flips y", up.enter.y === 6 && up.enter.scale === 0.96);
const toRight = Tokens.motion.toward(Tokens.motion.transition.popup(), Tokens.motion.SIDE.right);
mok("toward(right) turns y into x", toRight.enter.x === -6 && toRight.enter.y === 0);
const toLeft = Tokens.motion.toward(Tokens.motion.transition.popup(), Tokens.motion.SIDE.left);
mok("toward(left) turns y into negative x", toLeft.enter.x === 6 && toLeft.enter.y === 0);
mok("toward does not mutate the source", Tokens.motion.transition.popup().enter.y === -6);

/* ---------- stagger ---------- */
mok("stagger from first", Tokens.motion.stagger(3, { each: 40 }).join(",") === "0,40,80");
mok("stagger from last", Tokens.motion.stagger(3, { each: 40, from: "last" }).join(",") === "80,40,0");
mok("stagger from center", Tokens.motion.stagger(3, { each: 40, from: "center" }).join(",") === "40,0,40");
mok("stagger default step", Tokens.motion.stagger(2).join(",") === "0,40");
mok("stagger of none is empty", Tokens.motion.stagger(0).length === 0);

/* ---------- css ---------- */
mok("css enter string", Tokens.motion.css(modal) === "220ms cubic-bezier(0.32, 0.72, 0, 1)", Tokens.motion.css(modal));
mok("css exit string", Tokens.motion.cssExit(modal) === "120ms cubic-bezier(0.4, 0, 1, 1)", Tokens.motion.cssExit(modal));

/* ---------- reduced motion ---------- */
mok("reduced is false in node", Tokens.motion.reduced() === false);
Tokens.motion.setReduced(true);
mok("reduced can be forced", Tokens.motion.reduced() === true);

/* ---------- DOM apply ---------- */
function m_fakeEl() {
  const el = {
    style: {},
    scrollHeight: 120,
    _l: {},
    addEventListener(t, f) { this._l[t] = f; },
    removeEventListener(t) { delete this._l[t]; }
  };
  return el;
}

(async function () {
  const el = m_fakeEl();
  await Tokens.motion.apply(el, Tokens.motion.transition.modal(), "enter");
  mok("apply under reduced motion skips the transition", el.style.transition === "none");
  mok("apply under reduced motion lands visible", el.style.opacity === 1 && el.style.transform === "none");

  Tokens.motion.setReduced(false);
  const el2 = m_fakeEl();
  const p = Tokens.motion.apply(el2, Tokens.motion.transition.popup(), "enter");
  mok("apply sets a transition with the preset duration", /150ms/.test(el2.style.transition), el2.style.transition);
  mok("apply writes the enter transform", /scale\(0\.96\)/.test(el2.style.transform), el2.style.transform);
  mok("apply writes the enter opacity", el2.style.opacity === 0);
  await p;
  mok("apply resolves and rests at identity", el2.style.transform === "none" && el2.style.opacity === 1);

  const el3 = m_fakeEl();
  await Tokens.motion.apply(el3, Tokens.motion.transition.drawer(Tokens.motion.SIDE.left), "enter");
  mok("drawer apply uses a percentage translate", /translateX\(-100%\)/.test(el3.style.transform) || el3.style.transform === "none");

  const el4 = m_fakeEl();
  const cp = Tokens.motion.collapse(el4, true);
  mok("collapse sets overflow hidden while animating", el4.style.overflow === "hidden");
  await cp;
  mok("collapse opens to auto height", el4.style.height === "auto");

  const el5 = m_fakeEl();
  await Tokens.motion.collapse(el5, false, { duration: 0 });
  mok("collapse closes to zero", el5.style.height === "0px" || el5.style.height === "auto");

  const noop = await Tokens.motion.apply(null, Tokens.motion.transition.modal(), "enter");
  mok("apply tolerates a missing element", noop === undefined);

  
  
})();

console.log(`\nmotion: ${mpass} passed, ${mfail} failed`);
process.exit(mfail ? 1 : 0);

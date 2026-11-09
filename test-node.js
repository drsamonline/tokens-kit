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
ok("the kit never touches window", !/window\./.test(src));
ok("no auto-apply on load", !/^\s*T\.apply\(/m.test(src));
ok("no localStorage", !/localStorage/.test(src));

console.log("\n" + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);

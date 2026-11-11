# tokens-kit

[![live](https://img.shields.io/badge/live-online-22c55e)](https://drsamonline.github.io/tokens-kit/)
[![test](https://github.com/drsamonline/tokens-kit/actions/workflows/test.yml/badge.svg)](https://github.com/drsamonline/tokens-kit/actions/workflows/test.yml)
[![License: PolyForm Noncommercial 1.0.0](https://img.shields.io/badge/license-PolyForm%20Noncommercial%201.0.0-blue)](LICENSE)

**The Lobe UI token set as data.** Zero dependencies. One file. 121 colour names, 187
colour values per mode, a 19-field size scale and the three elevations — generated from
lobe-mygo's own token source so it cannot drift from it.

## Use it

```js
var T = require("./tokens-kit.js");           // Node; in a browser it is window.Tokens

T.light.BgContainer;                          // "#ffffff"
T.dark.Text;                                  // "#e6e6e6"
T.mix(T.light.Fill, T.light.Text, 0.15);      // a colour, premultiplied like the source
T.shadow("modal", "dark");                    // a CSS box-shadow string, ring included
T.cssVars("light");                           // { "--lobe-BgContainer": "#ffffff", ... }
```

## Opt-in, always

**This kit changes nothing on its own.** Importing it touches no element, no document, no
stylesheet and no storage — the tests assert that the source contains no `document.`, no
`window.` and no auto-apply. The only function that writes anything is `T.apply(el, mode)`,
and it writes to exactly the element you hand it.

That is deliberate. The drsamonline apps keep their own `design.css`, and the fleet is not
being rebranded: adopting Lobe's palette is a decision made one app at a time, by you, or
not at all. This kit makes the tokens *available*; it does not impose them.

## What it does

- **121 colour names × 2 modes** — `BgBase`, `BgContainer`, `TextSecondary`, `PrimaryHover`,
  `ErrorFill`, the nine-step palettes and the rest, values straight from `@lobehub/ui` 6.15.2
- **187 colour values per mode** — the 121 named tokens plus the palette scales
- **`T.mix(a, b, t)`** — the exact port of `theme.Mix`: premultiplied alpha, clamped `t`, so
  mixing a translucent token into an opaque one does not darken it
- **`T.contrast(a, b)`** — WCAG relative luminance and ratio, compositing a translucent
  colour over a background first, because a ratio needs an opaque colour to mean anything
- **`T.shadow(level, mode)`** — `modal`, `popover`, `tooltip`, each the layered shadow plus
  the one-pixel ring that stops a light card dissolving into a light page
- **`T.scale`** — radii (4/6/8/12), control heights (18/27/36/45), font sizes (12–38), line
  width and strong weight
- **`T.fillBorder(mode)` / `T.fillBorderStrong(mode)`** — the two derived border tokens, so a
  caller does not re-derive them
- **`T.cssVars(mode, prefix)` / `T.cssText(mode)`** — the tokens as `--lobe-*` custom
  properties, ready for a stylesheet

## Generated, not typed

`tokens-kit.js` holds the data inline because the kit has no build step. The block between
the `@generated` markers is written only by the generator:

```
node scripts/gen-tokens.js     # tokens.source.json -> the DATA block in tokens-kit.js
```

`tokens.source.json` is the extraction of lobe-mygo `pkg/theme/tokens_gen.go` and
`pkg/theme/shadow.go` at commit `5b3ecde`, which is itself generated from `@lobehub/ui`
6.15.2. The API around the block is hand-written; regenerating is idempotent and touches
nothing else.

## Verified

```
node test-node.js
55 passed, 0 failed
```

The tests check that all 121 names resolve in both modes, that light and dark actually
differ, the parse/format round-trip, that `mix` is premultiplied rather than a naive channel
average, that white-on-black is 21:1 and both body-text pairs clear AAA, that the shadow
rings differ by mode, that the CSS variables number 209, and — the important one — that the
kit never touches `document`, `window` or storage and never auto-applies.

## Consumers

None, by design. No app in the fleet is modified by this kit or by this pass. `motion-kit`
and the three component kits are built to be adopted deliberately; nothing is retrofitted.

## Support

<img src="docs/assets/support-portrait.jpg" width="72" height="72" alt="Dr. Sohil Momin" align="left" style="border-radius:50%;margin-right:1rem">

Free, offline, accountless — and staying that way. If it earned its keep:

| | |
|---|---|
| UPI (India) | `drsohilboi@ybl` — payee Dr. Sohil Momin, open amount, or scan [the QR](docs/assets/upi-qr.svg) |
| GitHub Sponsors | [github.com/sponsors/drsamonline](https://github.com/sponsors/drsamonline) |
| Ko-fi | [ko-fi.com/matneo](https://ko-fi.com/matneo) |
| PayPal | [paypal.me/drsohilmomin](https://paypal.me/drsohilmomin?locale.x=en_GB&country.x=IN) |
| My books | [Amazon author store](https://www.amazon.com/stores/author/B08ZT331LY/allbooks) |
| More apps | [drsamonline.github.io](https://drsamonline.github.io/) |
| Email | [sohilmomin2000@gmail.com](mailto:sohilmomin2000@gmail.com) |

Nothing is gated behind it: no accounts, no tracking, no network requests.

## Licence

PolyForm Noncommercial 1.0.0. (c) 2026 Dr Sohil Momin. Part of the Forge system — kits
open, orchestrator licensed. Token values derive from lobe-mygo (MIT) and `@lobehub/ui`.

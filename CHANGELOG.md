# Changelog

## 2.0.0 — 2026-11-12

**The motion moved in.** `motion-kit` is folded into this kit, reached as `T.motion.*`.

- **Added** `T.motion` — springs, easings (`ease`), durations, the step-response and
  unit-settle solvers, `motion()`, the transition presets (`popup`, `tooltip`, `modal`,
  `backdrop`, `drawer`, `toast`, `collapse`) and `apply()`, which honours
  `prefers-reduced-motion`.
- **Why**: a token set without its motion is half a design system. The colours, sizes and
  shadows describe what a surface looks like; the springs describe how it moves. Consumers
  want both, and `motion-kit`'s presets are meaningless without this kit's durations.
- **Nothing changed** in the token surface: `T.light`, `T.dark`, `T.names`, `T.scale`,
  `T.shadows`, `T.parse`, `T.toCss`, `T.mix`, `T.composite`, `T.luminance`, `T.cssVars`,
  `T.cssText` and `T.apply` behave exactly as before.
- **Deliberately not flattened**: motion's names are not spread onto `T`. `T.apply` and
  `T.cssVars` walk this object, and a `T.ease` is not a colour.

## 1.0.0 — 2026-11-09
### Added
- 121 colour names, 187 values per mode, 19 size fields, three elevations with rings
- `cssVars` (209 custom properties), `apply`, `mix`, `parse`, `toCss`, `contrast`, `fillBorder`
- `scripts/gen-tokens.js`, which rewrites only the generated block

### Verified
- 55 assertions
- generated from lobe-mygo's own token source
- the kit touches no `document`, no `window`, no storage and applies nothing on load

PolyForm Noncommercial 1.0.0. (c) 2026 Dr Sohil Momin.

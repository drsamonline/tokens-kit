# tokens-kit — API reference

**Version 1.0.0.** **The Lobe UI token set as data.** Zero dependencies. One file. 121 colour names, 187 colour values per mode, a 19-field size scale and the three elevations — generated from lobe-mygo's own token source so it cannot drift from it.

Generated from the source in this repository: every name, argument and
note below is read out of the kit file, so it cannot describe a function
that is not there.

```js
<script src="tokens-kit.js"></script>
Tokens.mix(...)
// or: const Tokens = require('./tokens-kit.js')
```

## The surface (10 entries)

| Name | Arguments | What it does |
|---|---|---|
| `Tokens.mix` | `(a, b, t)` | — |
| `Tokens.luminance` | `(c, over)` | — |
| `Tokens.contrast` | `(a, b, over)` | — |
| `Tokens.tokens` | `(mode)` | — |
| `Tokens.fillBorder` | `(mode)` | — |
| `Tokens.fillBorderStrong` | `(mode)` | — |
| `Tokens.shadow` | `(level, mode)` | — |
| `Tokens.cssVars` | `(mode, prefix)` | — |
| `Tokens.cssText` | `(mode, prefix)` | — |
| `Tokens.apply` | `(el, mode, prefix)` | — |

## Notes

- Zero dependencies, one file, no build step: it works from `file://`, from a
  `<script>` tag and from Node.
- The version above is the `VERSION` file in this repository; a pinned copy is
  what an app vendors.

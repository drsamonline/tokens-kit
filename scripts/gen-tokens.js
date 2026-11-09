#!/usr/bin/env node
/* gen-tokens.js — rewrite the generated DATA block in tokens-kit.js.
 *
 * The kit is one file with no build step, so the data has to live inside it.
 * This script is the only thing that writes that block: it reads
 * tokens.source.json (extracted from lobe-mygo's pkg/theme) and replaces the
 * text between the @generated markers. Everything outside the markers is
 * hand-written API and is left alone.
 *
 *   node scripts/gen-tokens.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(root, "tokens.source.json"), "utf8"));
const kit = path.join(root, "tokens-kit.js");

const KEY = /^[A-Za-z_$][\w$]*$/;
const k = (name) => (KEY.test(name) ? name : JSON.stringify(name));

function inline(o) {
  return "{ " + Object.keys(o).map((n) => k(n) + ": " + JSON.stringify(o[n])).join(", ") + " }";
}

function block(o, indent) {
  const pad = " ".repeat(indent);
  const rows = Object.keys(o).map(function (n) {
    const v = o[n];
    return pad + "  " + k(n) + ": " + (v && typeof v === "object" && !Array.isArray(v) ? inline(v) : JSON.stringify(v));
  });
  return "{\n" + rows.join(",\n") + "\n" + pad + "}";
}

const literal = [
  "{",
  '    generated: ' + JSON.stringify(data.generated) + ",",
  '    source: ' + JSON.stringify(data.source) + ",",
  '    colourNames: ' + JSON.stringify(data.colourNames) + ",",
  '    light: ' + block(data.light, 4) + ",",
  '    dark: ' + block(data.dark, 4) + ",",
  '    scale: ' + inline(data.scale) + ",",
  '    shadows: ' + block(data.shadows, 4),
  "  }"
].join("\n");

const src = fs.readFileSync(kit, "utf8");
const begin = "/* @generated:begin */";
const end = "/* @generated:end */";
const a = src.indexOf(begin);
const b = src.indexOf(end);
if (a < 0 || b < 0) {
  console.error("gen-tokens: markers not found in tokens-kit.js");
  process.exit(1);
}

/* Keep both markers in the output so regenerating is idempotent, and drop the
   placeholder's trailing semicolon - the literal carries its own. */
const rest = src.slice(b + end.length).replace(/^;/, "");
const out =
  src.slice(0, a) + begin +
  "\n  " + literal + ";\n  " + end +
  rest;

fs.writeFileSync(kit, out);

console.log("gen-tokens: wrote " + Object.keys(data.light).length + " light + " +
  Object.keys(data.dark).length + " dark colours, " + data.colourNames.length +
  " names, " + Object.keys(data.scale).length + " scale fields, " +
  Object.keys(data.shadows).length + " shadow levels into tokens-kit.js");

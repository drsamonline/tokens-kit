/* tokens-kit — the Lobe UI token set as data. Zero dependencies.
 *
 * 121 colour names, 187 colour values per mode, the size scale and the three
 * shadows, generated from lobe-mygo's own token source so it cannot drift.
 *
 *   var T = require("./tokens-kit.js");
 *   T.light.BgContainer;            // "#ffffff"
 *   T.mix(T.light.Fill, T.light.Text, 0.15);
 *   T.shadow("modal", "dark");      // a CSS box-shadow string
 *
 * OPT-IN, ALWAYS. Nothing here is applied by importing it: no element, no
 * document and no existing stylesheet is touched until you call apply(). The
 * drsamonline apps keep their own design.css; adopting this palette is a
 * decision made one app at a time, never a fleet-wide rebrand.
 *
 * Data: lobe-mygo @ 5b3ecde (MIT), pkg/theme — generated from @lobehub/ui 6.15.2.
 * PolyForm Noncommercial 1.0.0. (c) 2026 Dr Sohil Momin.
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.Tokens = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  var T = { version: "1.0.0" };

  /* ---------- generated data ---------- */
  /* Rewritten by scripts/gen-tokens.js from tokens.source.json. Do not edit by
     hand: run `node scripts/gen-tokens.js` after updating the source. */
  var DATA = /* @generated:begin */
  {
    generated: "2026-11-09",
    source: "lobe-mygo @ 5b3ecde8b184a2ab9d9aa2c8cac2ca3e6266a42b — pkg/theme/tokens_gen.go (generated from @lobehub/ui 6.15.2) and pkg/theme/shadow.go",
    colourNames: ["BgBase","BgBlur","BgContainer","BgContainerDisabled","BgContainerSecondary","BgElevated","BgLayout","BgMask","BgSolid","BgSolidActive","BgSolidHover","BgSpotlight","BgTextActive","BgTextHover","Border","BorderBg","BorderDisabled","BorderSecondary","Error","ErrorActive","ErrorAffix","ErrorBg","ErrorBgActive","ErrorBgFilledHover","ErrorBgHover","ErrorBorder","ErrorBorderHover","ErrorFill","ErrorFillQuaternary","ErrorFillSecondary","ErrorFillTertiary","ErrorHover","ErrorOutline","ErrorText","ErrorTextActive","ErrorTextHover","Fill","FillAlter","FillContent","FillContentHover","FillQuaternary","FillSecondary","FillTertiary","Highlight","Icon","IconHover","Info","InfoActive","InfoBg","InfoBgHover","InfoBorder","InfoBorderHover","InfoFill","InfoFillQuaternary","InfoFillSecondary","InfoFillTertiary","InfoHover","InfoText","InfoTextActive","InfoTextHover","Link","LinkActive","LinkHover","Primary","PrimaryActive","PrimaryBg","PrimaryBgHover","PrimaryBorder","PrimaryBorderHover","PrimaryFill","PrimaryFillQuaternary","PrimaryFillSecondary","PrimaryFillTertiary","PrimaryHover","PrimaryText","PrimaryTextActive","PrimaryTextHover","Shadow","Split","Success","SuccessActive","SuccessBg","SuccessBgHover","SuccessBorder","SuccessBorderHover","SuccessFill","SuccessFillQuaternary","SuccessFillSecondary","SuccessFillTertiary","SuccessHover","SuccessText","SuccessTextActive","SuccessTextHover","Text","TextBase","TextDescription","TextDisabled","TextHeading","TextLabel","TextLightSolid","TextPlaceholder","TextQuaternary","TextSecondary","TextTertiary","Warning","WarningActive","WarningAffix","WarningBg","WarningBgHover","WarningBorder","WarningBorderHover","WarningFill","WarningFillQuaternary","WarningFillSecondary","WarningFillTertiary","WarningHover","WarningOutline","WarningText","WarningTextActive","WarningTextHover","White"],
    light: {
      Blue: "#57abf9",
      BlueActive: "#0d78ce",
      BlueFillQuaternary: "rgba(105, 105, 255, 0.02)",
      BlueFillTertiary: "rgba(38, 138, 255, 0.06)",
      BgBase: "#ffffff",
      BgBlur: "rgba(0, 0, 0, 0)",
      BgContainer: "#ffffff",
      BgContainerDisabled: "rgba(0, 0, 0, 0.03)",
      BgContainerSecondary: "#fbfbfb",
      BgElevated: "#ffffff",
      BgLayout: "#f8f8f8",
      BgMask: "rgba(0, 0, 0, 0.44)",
      BgSolid: "#000000",
      BgSolidActive: "rgba(0, 0, 0, 0.95)",
      BgSolidHover: "rgba(0, 0, 0, 0.75)",
      BgSpotlight: "#dddddd",
      BgTextActive: "rgba(0, 0, 0, 0.12)",
      BgTextHover: "rgba(0, 0, 0, 0.06)",
      Border: "#e3e3e3",
      BorderBg: "#ffffff",
      BorderDisabled: "#d9d9d9",
      BorderSecondary: "#eeeeee",
      Error: "#f35837",
      ErrorActive: "#ce461e",
      ErrorAffix: "#f35837",
      ErrorBg: "#fef8f7",
      ErrorBgActive: "#ffccc7",
      ErrorBgFilledHover: "#ffdfdc",
      ErrorBgHover: "#fff0ee",
      ErrorBorder: "#ffded8",
      ErrorBorderHover: "#ffe7e4",
      ErrorFill: "rgba(255, 49, 11, 0.16)",
      ErrorFillQuaternary: "rgba(230, 80, 55, 0.04)",
      ErrorFillSecondary: "rgba(255, 37, 10, 0.11)",
      ErrorFillTertiary: "rgba(255, 41, 12, 0.07)",
      ErrorHover: "#ff775c",
      ErrorOutline: "rgba(230, 80, 55, 0.04)",
      ErrorText: "#ce461e",
      ErrorTextActive: "#ce461e",
      ErrorTextHover: "#ff775c",
      Fill: "rgba(0, 0, 0, 0.12)",
      FillAlter: "rgba(0, 0, 0, 0.015)",
      FillContent: "rgba(0, 0, 0, 0.06)",
      FillContentHover: "rgba(0, 0, 0, 0.12)",
      FillQuaternary: "rgba(0, 0, 0, 0.015)",
      FillSecondary: "rgba(0, 0, 0, 0.06)",
      FillTertiary: "rgba(0, 0, 0, 0.03)",
      Highlight: "#f35837",
      Icon: "#8a8a8a",
      IconHover: "#1f1f1f",
      Info: "#0076e3",
      InfoActive: "#0060cc",
      InfoBg: "#f8f9ff",
      InfoBgHover: "#edf4ff",
      InfoBorder: "#d7e6ff",
      InfoBorderHover: "#e3edff",
      InfoFill: "rgba(5, 99, 255, 0.16)",
      InfoFillQuaternary: "rgba(22, 55, 255, 0.03)",
      InfoFillSecondary: "rgba(0, 91, 255, 0.11)",
      InfoFillTertiary: "rgba(30, 117, 255, 0.08)",
      InfoHover: "#2c91ff",
      InfoText: "#0060cc",
      InfoTextActive: "#0060cc",
      InfoTextHover: "#2c91ff",
      Link: "#0060cc",
      LinkActive: "#0060cc",
      LinkHover: "#2c91ff",
      Primary: "#222222",
      PrimaryActive: "#111111",
      PrimaryBg: "#f5f5f5",
      PrimaryBgHover: "#eeeeee",
      PrimaryBorder: "#aaaaaa",
      PrimaryBorderHover: "#cccccc",
      PrimaryFill: "rgba(0, 0, 0, 0.36)",
      PrimaryFillQuaternary: "rgba(0, 0, 0, 0.08)",
      PrimaryFillSecondary: "rgba(0, 0, 0, 0.22)",
      PrimaryFillTertiary: "rgba(0, 0, 0, 0.16)",
      PrimaryHover: "#333333",
      PrimaryText: "#222222",
      PrimaryTextActive: "#111111",
      PrimaryTextHover: "#333333",
      Shadow: "#000000",
      Split: "rgba(12, 12, 12, 0.07)",
      Success: "#00a03f",
      SuccessActive: "#00864e",
      SuccessBg: "#f8fbf1",
      SuccessBgHover: "#eef6e6",
      SuccessBorder: "#d4eccc",
      SuccessBorderHover: "#e1f1d9",
      SuccessFill: "rgba(40, 160, 0, 0.2)",
      SuccessFillQuaternary: "rgba(138, 188, 22, 0.06)",
      SuccessFillSecondary: "rgba(55, 162, 2, 0.15)",
      SuccessFillTertiary: "rgba(85, 165, 5, 0.1)",
      SuccessHover: "#30b556",
      SuccessText: "#00864e",
      SuccessTextActive: "#00864e",
      SuccessTextHover: "#30b556",
      Text: "#1f1f1f",
      TextBase: "#000000",
      TextDescription: "#8a8a8a",
      TextDisabled: "#b0b0b0",
      TextHeading: "#1f1f1f",
      TextLabel: "#666666",
      TextLightSolid: "#ffffff",
      TextPlaceholder: "#b0b0b0",
      TextQuaternary: "#b0b0b0",
      TextSecondary: "#666666",
      TextTertiary: "#8a8a8a",
      Warning: "#feb400",
      WarningActive: "#d78f00",
      WarningAffix: "#feb400",
      WarningBg: "#fff8f3",
      WarningBgHover: "#fff2e2",
      WarningBorder: "#ffe1b3",
      WarningBorderHover: "#ffe9cc",
      WarningFill: "rgba(255, 155, 2, 0.3)",
      WarningFillQuaternary: "rgba(255, 115, 15, 0.05)",
      WarningFillSecondary: "rgba(255, 145, 0, 0.2)",
      WarningFillTertiary: "rgba(255, 147, 13, 0.12)",
      WarningHover: "#ffbe2b",
      WarningOutline: "rgba(255, 115, 15, 0.05)",
      WarningText: "#d78f00",
      WarningTextActive: "#d78f00",
      WarningTextHover: "#ffbe2b",
      White: "#ffffff",
      Cyan: "#95f3d9",
      CyanActive: "#2fa28a",
      CyanFillQuaternary: "rgba(55, 255, 122, 0.03)",
      CyanFillTertiary: "rgba(26, 255, 155, 0.07)",
      Geekblue: "#0072f5",
      Geekblue8: "#4c90ff",
      Geekblue9: "#0072f5",
      GeekblueActive: "#005ae0",
      GeekblueFillQuaternary: "rgba(105, 55, 255, 0.02)",
      GeekblueFillTertiary: "rgba(22, 88, 255, 0.06)",
      Gold: "#ee9e0b",
      GoldActive: "#d59300",
      GoldFillQuaternary: "rgba(255, 145, 55, 0.04)",
      GoldFillTertiary: "rgba(255, 155, 55, 0.08)",
      Gray: "#888888",
      Gray10: "#666666",
      Gray11: "#333333",
      Gray7: "#aaaaaa",
      Gray9: "#888888",
      GrayActive: "#666666",
      GrayFillQuaternary: "rgba(0, 0, 0, 0.03)",
      GrayFillTertiary: "rgba(0, 0, 0, 0.06)",
      Green: "#379d4a",
      GreenActive: "#007944",
      GreenFillQuaternary: "rgba(117, 230, 5, 0.06)",
      GreenFillTertiary: "rgba(84, 205, 12, 0.1)",
      Lime: "#c4f042",
      LimeActive: "#769d00",
      LimeFillQuaternary: "rgba(242, 255, 5, 0.08)",
      LimeFillTertiary: "rgba(218, 255, 11, 0.16)",
      Magenta: "#e34ba9",
      Magenta8: "#ef67ba",
      Magenta9: "#e34ba9",
      MagentaActive: "#a32466",
      MagentaFillQuaternary: "rgba(255, 55, 105, 0.04)",
      MagentaFillTertiary: "rgba(255, 22, 133, 0.09)",
      Orange: "#f88c13",
      Orange9: "#f88c13",
      OrangeActive: "#d18000",
      OrangeFillQuaternary: "rgba(255, 105, 255, 0.03)",
      OrangeFillTertiary: "rgba(255, 80, 30, 0.08)",
      Purple: "#bd54c6",
      Purple8: "#cb6ed2",
      Purple9: "#bd54c6",
      PurpleActive: "#892b8a",
      PurpleFillQuaternary: "rgba(255, 30, 155, 0.04)",
      PurpleFillTertiary: "rgba(255, 15, 235, 0.08)",
      Red: "#f4416c",
      RedActive: "#d6225d",
      RedFillQuaternary: "rgba(255, 55, 255, 0.02)",
      RedFillTertiary: "rgba(255, 15, 15, 0.05)",
      Volcano: "#ec5e41",
      Volcano8: "#fb745a",
      Volcano9: "#ec5e41",
      VolcanoActive: "#a53716",
      VolcanoFillQuaternary: "rgba(255, 55, 30, 0.04)",
      VolcanoFillTertiary: "rgba(255, 44, 11, 0.06)",
      Yellow: "#ffef5c",
      Yellow9: "#ffef5c",
      YellowActive: "#ab9800",
      YellowFillQuaternary: "rgba(255, 155, 255, 0.01)",
      YellowFillTertiary: "rgba(255, 105, 255, 0.02)"
    },
    dark: {
      Blue: "#60b1ff",
      BlueActive: "#2d8ae0",
      BlueFillQuaternary: "rgba(0, 44, 233, 0.09)",
      BlueFillTertiary: "rgba(0, 88, 246, 0.26)",
      BgBase: "#000000",
      BgBlur: "rgba(255, 255, 255, 0.04)",
      BgContainer: "#0d0d0d",
      BgContainerDisabled: "rgba(255, 255, 255, 0.06)",
      BgContainerSecondary: "#060606",
      BgElevated: "#1a1a1a",
      BgLayout: "#000000",
      BgMask: "rgba(0, 0, 0, 0.44)",
      BgSolid: "rgba(255, 255, 255, 0.95)",
      BgSolidActive: "rgba(255, 255, 255, 0.9)",
      BgSolidHover: "#ffffff",
      BgSpotlight: "#2d2d2d",
      BgTextActive: "rgba(255, 255, 255, 0.16)",
      BgTextHover: "rgba(255, 255, 255, 0.1)",
      Border: "#202020",
      BorderBg: "#0d0d0d",
      BorderDisabled: "#424242",
      BorderSecondary: "#1a1a1a",
      Error: "#e95350",
      ErrorActive: "#be3738",
      ErrorAffix: "#e95350",
      ErrorBg: "#340b0c",
      ErrorBgActive: "#5b2526",
      ErrorBgFilledHover: "#441e1f",
      ErrorBgHover: "#4b141a",
      ErrorBorder: "#8a3334",
      ErrorBorderHover: "#aa3f3e",
      ErrorFill: "rgba(250, 78, 90, 0.4)",
      ErrorFillQuaternary: "rgba(250, 100, 90, 0.1)",
      ErrorFillSecondary: "rgba(250, 67, 87, 0.3)",
      ErrorFillTertiary: "rgba(248, 52, 57, 0.21)",
      ErrorHover: "#ffa8a0",
      ErrorOutline: "rgba(242, 1, 7, 0.17)",
      ErrorText: "#e95350",
      ErrorTextActive: "#be3738",
      ErrorTextHover: "#ffa8a0",
      Fill: "rgba(255, 255, 255, 0.16)",
      FillAlter: "rgba(255, 255, 255, 0.02)",
      FillContent: "rgba(255, 255, 255, 0.1)",
      FillContentHover: "rgba(255, 255, 255, 0.16)",
      FillQuaternary: "rgba(255, 255, 255, 0.02)",
      FillSecondary: "rgba(255, 255, 255, 0.1)",
      FillTertiary: "rgba(255, 255, 255, 0.06)",
      Highlight: "#e95350",
      Icon: "#8f8f8f",
      IconHover: "#e6e6e6",
      Info: "#4cb3ff",
      InfoActive: "#0091eb",
      InfoBg: "#001a35",
      InfoBgHover: "#002949",
      InfoBorder: "#005389",
      InfoBorderHover: "#0067a9",
      InfoFill: "rgba(0, 150, 255, 0.38)",
      InfoFillQuaternary: "rgba(60, 150, 240, 0.1)",
      InfoFillSecondary: "rgba(0, 141, 252, 0.29)",
      InfoFillTertiary: "rgba(0, 124, 252, 0.21)",
      InfoHover: "#9cdaff",
      InfoText: "#4cb3ff",
      InfoTextActive: "#0091eb",
      InfoTextHover: "#9cdaff",
      Link: "#4cb3ff",
      LinkActive: "#0091eb",
      LinkHover: "#9cdaff",
      Primary: "#eeeeee",
      PrimaryActive: "#cccccc",
      PrimaryBg: "#111111",
      PrimaryBgHover: "#333333",
      PrimaryBorder: "#666666",
      PrimaryBorderHover: "#888888",
      PrimaryFill: "rgba(255, 255, 255, 0.22)",
      PrimaryFillQuaternary: "rgba(255, 255, 255, 0.02)",
      PrimaryFillSecondary: "rgba(255, 255, 255, 0.16)",
      PrimaryFillTertiary: "rgba(255, 255, 255, 0.08)",
      PrimaryHover: "#ffffff",
      PrimaryText: "#eeeeee",
      PrimaryTextActive: "#cccccc",
      PrimaryTextHover: "#ffffff",
      Shadow: "#000000",
      Split: "rgba(230, 230, 230, 0.06)",
      Success: "#80c933",
      SuccessActive: "#67a70a",
      SuccessBg: "#061f00",
      SuccessBgHover: "#102e00",
      SuccessBorder: "#315a09",
      SuccessBorderHover: "#3e6f06",
      SuccessFill: "rgba(112, 252, 0, 0.25)",
      SuccessFillQuaternary: "rgba(143, 229, 57, 0.07)",
      SuccessFillSecondary: "rgba(84, 242, 0, 0.19)",
      SuccessFillTertiary: "rgba(46, 238, 0, 0.13)",
      SuccessHover: "#bae48c",
      SuccessText: "#80c933",
      SuccessTextActive: "#67a70a",
      SuccessTextHover: "#bae48c",
      Text: "#e6e6e6",
      TextBase: "#ffffff",
      TextDescription: "#8f8f8f",
      TextDisabled: "#6b6b6b",
      TextHeading: "#e6e6e6",
      TextLabel: "#b4b4b4",
      TextLightSolid: "#ffffff",
      TextPlaceholder: "#6b6b6b",
      TextQuaternary: "#6b6b6b",
      TextSecondary: "#b4b4b4",
      TextTertiary: "#8f8f8f",
      Warning: "#ffbe45",
      WarningActive: "#e39a00",
      WarningAffix: "#ffbe45",
      WarningBg: "#251700",
      WarningBgHover: "#3c2200",
      WarningBorder: "#724600",
      WarningBorderHover: "#8d5700",
      WarningFill: "rgba(253, 147, 0, 0.32)",
      WarningFillQuaternary: "rgba(233, 144, 22, 0.09)",
      WarningFillSecondary: "rgba(250, 142, 0, 0.24)",
      WarningFillTertiary: "rgba(247, 153, 0, 0.15)",
      WarningHover: "#ffdd9c",
      WarningOutline: "rgba(38, 23, 0, 0.97)",
      WarningText: "#ffbe45",
      WarningTextActive: "#e39a00",
      WarningTextHover: "#ffdd9c",
      White: "#ffffff",
      Cyan: "#95f3d9",
      CyanActive: "#55bca4",
      CyanFillQuaternary: "rgba(0, 250, 150, 0.02)",
      CyanFillTertiary: "rgba(0, 243, 200, 0.14)",
      Geekblue: "#0072f5",
      Geekblue8: "#006cf3",
      Geekblue9: "#0072f5",
      GeekblueActive: "#0065ed",
      GeekblueFillQuaternary: "rgba(0, 18, 245, 0.11)",
      GeekblueFillTertiary: "rgba(0, 43, 253, 0.3)",
      Gold: "#ffb224",
      GoldActive: "#eaa100",
      GoldFillQuaternary: "rgba(233, 100, 0, 0.03)",
      GoldFillTertiary: "rgba(247, 159, 0, 0.17)",
      Gray: "#777777",
      Gray10: "#aaaaaa",
      Gray11: "#dddddd",
      Gray7: "#666666",
      Gray9: "#777777",
      GrayActive: "#666666",
      GrayFillQuaternary: "rgba(255, 255, 255, 0.02)",
      GrayFillTertiary: "rgba(255, 255, 255, 0.06)",
      Green: "#62c473",
      GreenActive: "#1b8d4d",
      GreenFillQuaternary: "rgba(0, 250, 150, 0.02)",
      GreenFillTertiary: "rgba(0, 242, 150, 0.12)",
      Lime: "#c4f042",
      LimeActive: "#8fb81b",
      LimeFillQuaternary: "rgba(100, 200, 0, 0.02)",
      LimeFillTertiary: "rgba(154, 254, 0, 0.13)",
      Magenta: "#e34ba9",
      Magenta8: "#ce3e91",
      Magenta9: "#e34ba9",
      MagentaActive: "#b8317b",
      MagentaFillQuaternary: "rgba(229, 0, 29, 0.07)",
      MagentaFillTertiary: "rgba(252, 0, 81, 0.21)",
      Orange: "#ff9927",
      Orange9: "#ff9927",
      OrangeActive: "#e88b00",
      OrangeFillQuaternary: "rgba(233, 100, 0, 0.03)",
      OrangeFillTertiary: "rgba(241, 147, 0, 0.17)",
      Purple: "#bd54c6",
      Purple8: "#ab46b2",
      Purple9: "#bd54c6",
      PurpleActive: "#9a399e",
      PurpleFillQuaternary: "rgba(217, 0, 183, 0.06)",
      PurpleFillTertiary: "rgba(242, 0, 221, 0.19)",
      Red: "#f4416c",
      RedActive: "#e43165",
      RedFillQuaternary: "rgba(250, 0, 50, 0.06)",
      RedFillTertiary: "rgba(255, 0, 95, 0.22)",
      Volcano: "#ec5e41",
      Volcano8: "#d45132",
      Volcano9: "#ec5e41",
      VolcanoActive: "#bc4424",
      VolcanoFillQuaternary: "rgba(240, 20, 0, 0.05)",
      VolcanoFillTertiary: "rgba(247, 53, 0, 0.19)",
      Yellow: "#ffef5c",
      Yellow9: "#ffef5c",
      YellowActive: "#c7b426",
      YellowFillQuaternary: "rgba(250, 200, 0, 0.02)",
      YellowFillTertiary: "rgba(247, 193, 0, 0.15)"
    },
    scale: { BorderRadius: 8, BorderRadiusLG: 12, BorderRadiusSM: 6, BorderRadiusXS: 4, ControlHeight: 36, ControlHeightLG: 45, ControlHeightSM: 27, ControlHeightXS: 18, FontSize: 14, FontSizeHeading1: 38, FontSizeHeading2: 30, FontSizeHeading3: 24, FontSizeHeading4: 20, FontSizeHeading5: 16, FontSizeLG: 16, FontSizeSM: 12, FontSizeXL: 20, FontWeightStrong: 600, LineWidth: 1 },
    shadows: {
      BoxShadow: [{"y":40,"blur":80,"spread":0,"light":0.06,"dark":0.09},{"y":20,"blur":40,"spread":0,"light":0.05,"dark":0.08},{"y":10,"blur":20,"spread":0,"light":0.04,"dark":0.06},{"y":5,"blur":10,"spread":0,"light":0.03,"dark":0.05},{"y":2,"blur":4,"spread":0,"light":0.02,"dark":0.03}],
      BoxShadowSecondary: [{"y":17.5,"blur":23.4,"spread":0,"light":0.04,"dark":0.06},{"y":9.4,"blur":12.5,"spread":0,"light":0.03,"dark":0.05},{"y":5.25,"blur":7,"spread":0,"light":0.02,"dark":0.03},{"y":2.8,"blur":3.7,"spread":-2,"light":0.01,"dark":0.02},{"y":1.2,"blur":1.5,"spread":0,"light":0.01,"dark":0.02}],
      BoxShadowTertiary: [{"y":1,"blur":2,"spread":0,"light":0.04,"dark":0.06},{"y":2,"blur":4,"spread":0,"light":0.02,"dark":0.03}]
    }
  };
  /* @generated:end */

  T.light = DATA.light;
  T.dark = DATA.dark;
  T.names = DATA.colourNames;
  T.scale = DATA.scale;
  T.shadows = DATA.shadows;

  /* ---------- colour parsing ---------- */
  function parse(s) {
    if (typeof s !== "string") return null;
    var m;
    if ((m = /^#([0-9a-f]{6})$/i.exec(s))) {
      return {
        r: parseInt(m[1].slice(0, 2), 16),
        g: parseInt(m[1].slice(2, 4), 16),
        b: parseInt(m[1].slice(4, 6), 16),
        a: 1
      };
    }
    if ((m = /^#([0-9a-f]{8})$/i.exec(s))) {
      return {
        r: parseInt(m[1].slice(0, 2), 16),
        g: parseInt(m[1].slice(2, 4), 16),
        b: parseInt(m[1].slice(4, 6), 16),
        a: parseInt(m[1].slice(6, 8), 16) / 255
      };
    }
    if ((m = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(s))) {
      return { r: +m[1], g: +m[2], b: +m[3], a: m[4] == null ? 1 : +m[4] };
    }
    return null;
  }
  T.parse = parse;

  function toCss(c) {
    var r = Math.round(c.r), g = Math.round(c.g), b = Math.round(c.b);
    var a = c.a == null ? 1 : c.a;
    if (a >= 1) return "#" + [r, g, b].map(function (v) {
      return (v < 16 ? "0" : "") + v.toString(16);
    }).join("");
    return "rgba(" + r + ", " + g + ", " + b + ", " + Math.round(a * 1000) / 1000 + ")";
  }
  T.toCss = toCss;

  /* ---------- mix ---------- */
  /* The exact port of theme.Mix: premultiplied alpha, so mixing a transparent
     colour with an opaque one does not darken it. t is clamped to 0..1. */
  T.mix = function (a, b, t) {
    var c = typeof a === "string" ? parse(a) : a;
    var o = typeof b === "string" ? parse(b) : b;
    if (!c || !o) return null;
    t = Math.max(0, Math.min(1, t == null ? 0.5 : t));
    var ca = c.a, oa = o.a;
    var alpha = ca * (1 - t) + oa * t;
    if (alpha === 0) return { r: 0, g: 0, b: 0, a: 0 };
    function ch(x, y) { return Math.round((x * ca * (1 - t) + y * oa * t) / alpha); }
    return { r: ch(c.r, o.r), g: ch(c.g, o.g), b: ch(c.b, o.b), a: Math.round(alpha * 1000) / 1000 };
  };

  /* ---------- contrast ---------- */
  /* WCAG relative luminance and contrast ratio. A translucent colour is first
     composited over a background, since a ratio needs an opaque colour to mean
     anything - pass the surface it will sit on. */
  function composite(c, over) {
    var bg = typeof over === "string" ? parse(over) : over;
    if (!bg) return c;
    var a = c.a == null ? 1 : c.a;
    return {
      r: c.r * a + bg.r * (1 - a),
      g: c.g * a + bg.g * (1 - a),
      b: c.b * a + bg.b * (1 - a),
      a: 1
    };
  }
  T.composite = composite;

  function channel(v) {
    v = v / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }

  T.luminance = function (c, over) {
    var x = typeof c === "string" ? parse(c) : c;
    if (!x) return 0;
    if ((x.a == null ? 1 : x.a) < 1) x = composite(x, over || "#ffffff");
    return 0.2126 * channel(x.r) + 0.7152 * channel(x.g) + 0.0722 * channel(x.b);
  };

  T.contrast = function (a, b, over) {
    var la = T.luminance(a, over), lb = T.luminance(b, over);
    var hi = Math.max(la, lb), lo = Math.min(la, lb);
    return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
  };

  /* ---------- tokens by mode ---------- */
  T.tokens = function (mode) {
    return mode === "dark" ? T.dark : T.light;
  };

  /* The two derived tokens from theme.go, kept here so a caller does not have to
     re-derive them: the border a filled control gets, and the stronger one. */
  T.fillBorder = function (mode) {
    var t = T.tokens(mode);
    return mode === "dark" ? t.FillSecondary : t.Fill;
  };

  T.fillBorderStrong = function (mode) {
    var t = T.tokens(mode);
    return mode === "dark" ? t.Fill : toCss(T.mix(t.Fill, t.Text, 0.15));
  };

  /* ---------- shadows ---------- */
  /* The three Lobe elevations, as a CSS box-shadow. Elevate in the Go source
     paints each layer plus a one-pixel ring, so the ring is included: it is what
     stops a light-mode card dissolving into a light-mode page. */
  var LEVELS = {
    modal: "BoxShadow",
    popover: "BoxShadowSecondary",
    tooltip: "BoxShadowTertiary"
  };

  T.shadow = function (level, mode) {
    var key = LEVELS[level] || level;
    var layers = T.shadows[key];
    if (!layers) return "none";
    var dark = mode === "dark";
    var parts = layers.map(function (l) {
      var a = dark ? l.dark : l.light;
      return "0 " + l.y + "px " + l.blur + "px " + l.spread + "px rgba(0, 0, 0, " + a + ")";
    });
    parts.push(dark
      ? "0 0 0 1px rgba(255, 255, 255, 0.18)"
      : "0 0 0 1px rgba(0, 0, 0, 0.05)");
    return parts.join(", ");
  };

  /* ---------- CSS custom properties ---------- */
  /* The tokens as --lobe-* variables, ready for a stylesheet. Numbers get px,
     except the unitless ones. */
  var UNITLESS = { FontWeightStrong: true };

  T.cssVars = function (mode, prefix) {
    var p = prefix == null ? "--lobe-" : prefix;
    var out = {};
    var t = T.tokens(mode);
    Object.keys(t).forEach(function (k) { out[p + k] = t[k]; });
    Object.keys(T.scale).forEach(function (k) {
      out[p + k] = UNITLESS[k] ? T.scale[k] : T.scale[k] + "px";
    });
    out[p + "shadow-modal"] = T.shadow("modal", mode);
    out[p + "shadow-popover"] = T.shadow("popover", mode);
    out[p + "shadow-tooltip"] = T.shadow("tooltip", mode);
    return out;
  };

  T.cssText = function (mode, prefix) {
    var vars = T.cssVars(mode, prefix);
    return Object.keys(vars).map(function (k) { return k + ": " + vars[k] + ";"; }).join("\n");
  };

  /* ---------- apply ---------- */
  /* The only function that touches the DOM, and it touches exactly the element
     you hand it. There is no auto-apply, no document-wide side effect, and no
     storage: importing this kit changes nothing in an existing app. */
  T.apply = function (el, mode, prefix) {
    if (!el || !el.style || !el.style.setProperty) return 0;
    var vars = T.cssVars(mode, prefix);
    var n = 0;
    Object.keys(vars).forEach(function (k) { el.style.setProperty(k, vars[k]); n++; });
    if (el.setAttribute) el.setAttribute("data-lobe-theme", mode === "dark" ? "dark" : "light");
    return n;
  };

  return T;
});

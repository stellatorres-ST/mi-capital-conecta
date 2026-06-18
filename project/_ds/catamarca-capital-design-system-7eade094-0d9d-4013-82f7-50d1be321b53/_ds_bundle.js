/* @ds-bundle: {"format":3,"namespace":"CatamarcaCapitalDesignSystem_7eade0","components":[{"name":"ClaimChip","sourcePath":"components/brand/ClaimChip.jsx"},{"name":"Mosca","sourcePath":"components/brand/Mosca.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/ClaimChip.jsx":"6df8ed233b9f","components/brand/Mosca.jsx":"5949fe05ca77","components/buttons/Button.jsx":"0b117c173edd","components/buttons/IconButton.jsx":"bde5bef6cc7c","components/display/Avatar.jsx":"39529643fa0a","components/display/Badge.jsx":"37ce930ea922","components/display/Card.jsx":"43538b6361e5","components/display/Tag.jsx":"6791cd2eebf7","components/feedback/Alert.jsx":"537e88c5a699","components/forms/Checkbox.jsx":"4c2172d98890","components/forms/Input.jsx":"e683faecc5cf","components/forms/Select.jsx":"4a2e07de3ee5","components/forms/Switch.jsx":"76853c876314","components/navigation/Tabs.jsx":"381b579bb780","guidelines/tweaks-panel.jsx":"6591467622ed","ui_kits/portal/App.jsx":"77dc238b89f1","ui_kits/portal/Chrome.jsx":"d736572476ca","ui_kits/portal/Home.jsx":"ca58595f106c","ui_kits/portal/Tramites.jsx":"8df697ffc642"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CatamarcaCapitalDesignSystem_7eade0 = window.CatamarcaCapitalDesignSystem_7eade0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/ClaimChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  lima: "var(--cc-amarillo-lima)",
  amarillo: "var(--cc-amarillo)",
  celeste: "var(--cc-celeste)",
  fucsia: "var(--cc-fucsia)",
  blanco: "#ffffff"
};

/**
 * Brand claim — the "ir" verb system (Va con vos!, Re va!, Sí va!…).
 * Rendered as colored claim text with a hand-drawn underline swoosh,
 * the way it appears integrated into titles on real pieces.
 */
function ClaimChip({
  children = "va con vos!",
  color = "lima",
  size = "md",
  underline = true,
  style = {},
  ...rest
}) {
  const c = COLORS[color] || COLORS.lima;
  const sizes = {
    sm: 22,
    md: 38,
    lg: 64,
    xl: 96
  };
  const fs = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      position: "relative",
      fontFamily: "var(--font-claim)",
      fontSize: `${fs}px`,
      lineHeight: 1,
      color: c,
      paddingBottom: underline ? `${fs * 0.18}px` : 0,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children, underline && /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 100 10",
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: `${fs * 0.16}px`,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 6 C 22 2, 44 9, 66 4 S 95 3, 99 6",
    fill: "none",
    stroke: c,
    strokeWidth: "2.6",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  })));
}
Object.assign(__ds_scope, { ClaimChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ClaimChip.jsx", error: String((e && e.message) || e) }); }

// components/brand/Mosca.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  amarillo: "var(--cc-amarillo)",
  lima: "var(--cc-amarillo-lima)",
  fucsia: "var(--cc-fucsia)",
  celeste: "var(--cc-celeste)",
  blanco: "#ffffff"
};

/**
 * Mosca — the brand's corner bracket (an "L" echoing the isotipo arrow),
 * placed in a corner of photos and pieces. Default: top-right, amarillo.
 */
function Mosca({
  corner = "tr",
  color = "amarillo",
  size = 56,
  thickness = 12,
  inset = 28,
  style = {},
  ...rest
}) {
  const c = COLORS[color] || COLORS.amarillo;
  const pos = {
    tr: {
      top: inset,
      right: inset
    },
    tl: {
      top: inset,
      left: inset
    },
    br: {
      bottom: inset,
      right: inset
    },
    bl: {
      bottom: inset,
      left: inset
    }
  }[corner] || {
    top: inset,
    right: inset
  };

  // which two edges get the bracket
  const vertical = corner.includes("t") ? "borderTop" : "borderBottom";
  const horizontal = corner.includes("l") ? "borderLeft" : "borderRight";
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      position: "absolute",
      width: `${size}px`,
      height: `${size}px`,
      [vertical]: `${thickness}px solid ${c}`,
      [horizontal]: `${thickness}px solid ${c}`,
      ...pos,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Mosca });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Mosca.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    fontSize: "13px",
    padding: "0 14px",
    height: "34px",
    radius: "var(--radius-sm)"
  },
  md: {
    fontSize: "15px",
    padding: "0 20px",
    height: "44px",
    radius: "var(--radius-md)"
  },
  lg: {
    fontSize: "17px",
    padding: "0 28px",
    height: "54px",
    radius: "var(--radius-md)"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--color-primary)",
    color: "var(--text-on-brand)",
    border: "var(--bw-1) solid transparent",
    "--hov": "var(--color-primary-strong)"
  },
  accent: {
    background: "var(--cc-fucsia)",
    color: "#fff",
    border: "var(--bw-1) solid transparent",
    "--hov": "#d8009b"
  },
  civic: {
    background: "var(--cc-azul-institucional)",
    color: "#fff",
    border: "var(--bw-1) solid transparent",
    "--hov": "var(--cc-azul-oscuro)"
  },
  secondary: {
    background: "transparent",
    color: "var(--color-primary)",
    border: "var(--bw-2) solid var(--color-primary)",
    "--hov": "var(--color-primary-soft)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-strong)",
    border: "var(--bw-1) solid transparent",
    "--hov": "var(--surface-sunken)"
  }
};

/**
 * Catamarca Capital primary action button.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const vr = VARIANTS[variant] || VARIANTS.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = variant === "secondary" || variant === "ghost" ? hover && !disabled ? vr["--hov"] : vr.background : hover && !disabled ? vr["--hov"] : vr.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-bold)",
      fontSize: sz.fontSize,
      height: sz.height,
      padding: sz.padding,
      borderRadius: sz.radius,
      background: bg,
      color: vr.color,
      border: vr.border,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      letterSpacing: "0.01em",
      transform: active && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 34,
  md: 44,
  lg: 54
};

/**
 * Square/circular icon-only button.
 */
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  round = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const variants = {
    primary: {
      bg: "var(--color-primary)",
      hov: "var(--color-primary-strong)",
      color: "#fff",
      border: "transparent"
    },
    accent: {
      bg: "var(--cc-fucsia)",
      hov: "#d8009b",
      color: "#fff",
      border: "transparent"
    },
    ghost: {
      bg: "transparent",
      hov: "var(--surface-sunken)",
      color: "var(--text-strong)",
      border: "transparent"
    },
    outline: {
      bg: "transparent",
      hov: "var(--surface-sunken)",
      color: "var(--text-strong)",
      border: "var(--cc-line)"
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${dim}px`,
      height: `${dim}px`,
      borderRadius: round ? "var(--radius-pill)" : "var(--radius-md)",
      background: hover && !disabled ? v.hov : v.bg,
      color: v.color,
      border: `var(--bw-1) solid ${v.border}`,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 44,
  lg: 60
};
const BGS = ["var(--cc-verde-petroleo)", "var(--cc-fucsia)", "var(--cc-azul-institucional)", "var(--cc-naranja)", "var(--cc-verde-lima)", "var(--cc-celeste)"];
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
}

/**
 * Round avatar with image or auto-colored initials.
 */
function Avatar({
  name = "",
  src = null,
  size = "md",
  style = {},
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const bg = BGS[(name.charCodeAt(0) || 0) % BGS.length];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: `${dim}px`,
      height: `${dim}px`,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: src ? "var(--surface-sunken)" : bg,
      color: "#fff",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-bold)",
      fontSize: `${dim * 0.38}px`,
      flex: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: "var(--surface-sunken)",
    fg: "var(--text-body)"
  },
  verde: {
    bg: "var(--color-primary-soft)",
    fg: "var(--color-primary-strong)"
  },
  lima: {
    bg: "#EAF1CE",
    fg: "#3c4d0a"
  },
  fucsia: {
    bg: "#FFE0F5",
    fg: "#9b0079"
  },
  naranja: {
    bg: "#FDEACF",
    fg: "#8a4e05"
  },
  azul: {
    bg: "#E1EAF6",
    fg: "var(--cc-azul-oscuro)"
  },
  celeste: {
    bg: "#DCF1F8",
    fg: "#1d6a87"
  },
  success: {
    bg: "#E3F0DF",
    fg: "#2f5a27"
  },
  warning: {
    bg: "#FFF0CC",
    fg: "#8a5a00"
  },
  danger: {
    bg: "#FBE2E6",
    fg: "#9c0c22"
  }
};

/**
 * Small status / category label.
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-bold)",
      fontSize: "11.5px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      padding: "3px 10px",
      borderRadius: "var(--radius-xs)",
      background: solid ? t.fg : t.bg,
      color: solid ? "#fff" : t.fg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container with optional accent edge and elevation.
 */
function Card({
  children,
  elevation = "sm",
  accent = null,
  padding = "var(--space-6)",
  style = {},
  ...rest
}) {
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  const accentColors = {
    verde: "var(--cc-verde-petroleo)",
    lima: "var(--cc-verde-lima)",
    fucsia: "var(--cc-fucsia)",
    naranja: "var(--cc-naranja)",
    azul: "var(--cc-azul-institucional)",
    celeste: "var(--cc-celeste)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      border: "var(--bw-hair) solid var(--border-subtle)",
      boxShadow: shadows[elevation] || shadows.sm,
      padding,
      borderTop: accent ? `4px solid ${accentColors[accent] || accent}` : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Filter / keyword pill, optionally removable or selectable.
 */
function Tag({
  children,
  selected = false,
  onRemove = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-medium)",
      fontSize: "13px",
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: selected ? "var(--color-primary)" : "var(--surface-card)",
      color: selected ? "#fff" : "var(--text-body)",
      border: `var(--bw-1) solid ${selected ? "var(--color-primary)" : "var(--border-subtle)"}`,
      cursor: rest.onClick ? "pointer" : "default",
      transition: "background var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "inherit",
      opacity: 0.7,
      fontSize: "14px",
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bar: "var(--cc-celeste)",
    bg: "#EAF6FB",
    fg: "#1d6a87",
    icon: "i"
  },
  success: {
    bar: "var(--cc-verde-medio)",
    bg: "#EAF3E6",
    fg: "#2f5a27",
    icon: "✓"
  },
  warning: {
    bar: "var(--cc-amarillo)",
    bg: "#FFF6E0",
    fg: "#8a5a00",
    icon: "!"
  },
  danger: {
    bar: "var(--color-danger)",
    bg: "#FBE9EC",
    fg: "#9c0c22",
    icon: "!"
  }
};

/**
 * Inline contextual message.
 */
function Alert({
  children,
  title = null,
  tone = "info",
  onClose = null,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      padding: "14px 16px",
      background: t.bg,
      borderRadius: "var(--radius-md)",
      borderLeft: `4px solid ${t.bar}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "22px",
      height: "22px",
      flex: "none",
      marginTop: "1px",
      borderRadius: "var(--radius-pill)",
      background: t.bar,
      color: "#fff",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-bold)",
      fontSize: "13px"
    }
  }, t.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-bold)",
      fontSize: "15px",
      color: t.fg,
      marginBottom: "2px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-body)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: t.fg,
      fontSize: "16px",
      lineHeight: 1,
      padding: 0,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with label.
 */
function Checkbox({
  label = null,
  checked,
  defaultChecked,
  onChange,
  id,
  disabled = false,
  ...rest
}) {
  const cbId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  function toggle(e) {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "22px",
      height: "22px",
      flex: "none",
      borderRadius: "var(--radius-xs)",
      background: on ? "var(--color-primary)" : "var(--surface-card)",
      border: `var(--bw-1) solid ${on ? "var(--color-primary)" : "var(--border-strong)"}`,
      transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)",
      color: "#fff",
      fontSize: "14px",
      lineHeight: 1
    }
  }, on ? "✓" : ""), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with label, hint and error states.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? "var(--color-danger)" : focus ? "var(--color-primary)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-medium)",
      fontSize: "14px",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)",
      height: "46px",
      padding: "0 14px",
      background: "var(--surface-card)",
      border: `var(--bw-1) solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus && !error ? "0 0 0 3px var(--color-primary-soft)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: error ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Styled native select.
 */
function Select({
  label = null,
  hint = null,
  children,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-medium)",
      fontSize: "14px",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)",
      width: "100%",
      height: "46px",
      padding: "0 40px 0 14px",
      background: "var(--surface-card)",
      border: `var(--bw-1) solid ${focus ? "var(--color-primary)" : "var(--border-subtle)"}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      cursor: "pointer",
      boxShadow: focus ? "0 0 0 3px var(--color-primary-soft)" : "none",
      transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: "12px"
    }
  }, "\u25BC")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * On/off toggle switch.
 */
function Switch({
  label = null,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  ...rest
}) {
  const swId = id || React.useId();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  function toggle(e) {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  }
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: "46px",
      height: "26px",
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: on ? "var(--color-primary)" : "var(--cc-mist)",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "3px",
      left: on ? "23px" : "3px",
      width: "20px",
      height: "20px",
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--dur-base) var(--ease-overshoot)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underlined tab navigation.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;
  function select(id) {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "var(--bw-hair) solid var(--border-subtle)",
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        position: "relative",
        fontFamily: "var(--font-heading)",
        fontWeight: on ? "var(--fw-bold)" : "var(--fw-medium)",
        fontSize: "15px",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "12px 16px",
        transition: "color var(--dur-fast) var(--ease-out)"
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: "12px",
        right: "12px",
        bottom: "-1px",
        height: "3px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--cc-fucsia)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// guidelines/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/App.jsx
try { (() => {
// Catamarca Capital — portal app shell
function PortalApp() {
  const [view, setView] = React.useState("inicio");
  function nav(v) {
    setView(v === "inicio" || v === "tramites" ? v : "inicio");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    view: view,
    onNav: nav
  }), view === "tramites" ? /*#__PURE__*/React.createElement(Tramites, {
    onNav: nav
  }) : /*#__PURE__*/React.createElement(Home, {
    onNav: nav
  }), /*#__PURE__*/React.createElement(Footer, {
    onNav: nav
  }));
}
Object.assign(window, {
  PortalApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Chrome.jsx
try { (() => {
// Catamarca Capital — portal chrome (top bar + footer)
const {
  IconButton,
  Button
} = window.CatamarcaCapitalDesignSystem_7eade0;

// Informative iconography — Lucide (geometric, 2px stroke). Re-renders safely.
function Glyph({
  d,
  size = 20,
  color = "currentColor",
  stroke = 2
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (host && window.lucide) {
      host.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", d);
      host.appendChild(i);
      window.lucide.createIcons({
        nameAttr: "data-lucide",
        attrs: {
          width: size,
          height: size,
          stroke: color,
          "stroke-width": stroke
        }
      });
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      width: size,
      height: size
    }
  });
}
const NAV = [{
  id: "inicio",
  label: "Inicio"
}, {
  id: "tramites",
  label: "Trámites"
}, {
  id: "turismo",
  label: "Turismo"
}, {
  id: "agenda",
  label: "Agenda"
}, {
  id: "ciudad",
  label: "La Ciudad"
}];
function TopBar({
  view,
  onNav
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cc-azul-oscuro)",
      color: "rgba(255,255,255,.85)",
      fontFamily: "var(--font-body)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "6px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Secretar\xEDa de Turismo y Desarrollo Econ\xF3mico"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Gesti\xF3n Muni"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "311")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cc-azul-oscuro)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 24px",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/catamarca-capital-blanco.png",
    alt: "Catamarca Capital",
    onClick: () => onNav("inicio"),
    style: {
      height: 34,
      width: "auto",
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 2,
      marginLeft: 8
    }
  }, NAV.map(n => {
    const on = n.id === view || view === "tramite-detalle" && n.id === "tramites";
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav(n.id),
      style: {
        position: "relative",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-heading)",
        fontWeight: on ? "var(--fw-bold)" : "var(--fw-medium)",
        fontSize: 15,
        color: "#fff",
        opacity: on ? 1 : 0.82,
        padding: "26px 14px"
      }
    }, n.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 14,
        right: 14,
        bottom: 18,
        height: 3,
        borderRadius: 999,
        background: on ? "var(--cc-amarillo-lima)" : "transparent"
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Buscar",
    variant: "ghost",
    style: {
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: "search"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "Mi Ciudad")))));
}
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--cc-azul-oscuro)",
      color: "rgba(255,255,255,.8)",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "48px 24px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/catamarca-capital-blanco.png",
    alt: "Catamarca Capital",
    style: {
      height: 38,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 280,
      color: "rgba(255,255,255,.7)"
    }
  }, "La ciudad que avanza junto a las personas. Participaci\xF3n, bienestar y orgullo ciudadano."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-claim)",
      fontSize: 22,
      color: "var(--cc-amarillo-lima)",
      marginTop: 14
    }
  }, "Va con vos!")), [{
    t: "Gestión",
    links: ["Trámites", "Turnos", "Reclamos", "Normativa"]
  }, {
    t: "Ciudad",
    links: ["Turismo", "Cultura", "Deporte", "Agenda"]
  }, {
    t: "Ayuda",
    links: ["Contacto", "Preguntas", "Mapa del sitio", "Accesibilidad"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.t
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-overline",
    style: {
      color: "rgba(255,255,255,.5)",
      marginBottom: 14
    }
  }, col.t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav("tramites");
    },
    style: {
      color: "rgba(255,255,255,.78)",
      fontSize: 14
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "rgba(255,255,255,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Municipalidad de Catamarca Capital"), /*#__PURE__*/React.createElement("span", null, "Hecho con cercan\xEDa \xB7 Gesti\xF3n Muni"))));
}
Object.assign(window, {
  TopBar,
  Footer,
  Glyph
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Home.jsx
try { (() => {
// Catamarca Capital — Home / landing surface
const {
  Button,
  Card,
  Badge,
  Tag,
  ClaimChip
} = window.CatamarcaCapitalDesignSystem_7eade0;
const WRAP = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px"
};
const SERVICES = [{
  icon: "file-text",
  label: "Trámites",
  desc: "Iniciá gestiones online",
  color: "var(--cc-azul-institucional)"
}, {
  icon: "calendar-check",
  label: "Turnos",
  desc: "Reservá tu atención",
  color: "var(--cc-azul-oscuro)"
}, {
  icon: "banknote",
  label: "Tasas y pagos",
  desc: "Consultá y pagá",
  color: "var(--cc-celeste)"
}, {
  icon: "message-square-warning",
  label: "Reclamos",
  desc: "Reportá un problema",
  color: "var(--cc-fucsia)"
}, {
  icon: "bus",
  label: "Movilidad",
  desc: "Transporte y SUBE",
  color: "var(--cc-naranja)"
}, {
  icon: "leaf",
  label: "Ambiente",
  desc: "Reciclaje y espacios",
  color: "var(--cc-verde-lima)"
}];
const EVENTS = [{
  day: "20",
  mon: "JUN",
  title: "Cine en la Plaza 25 de Mayo",
  cat: "Cultura",
  tone: "lima",
  time: "20:00 hs · Entrada libre"
}, {
  day: "22",
  mon: "JUN",
  title: "Feria de emprendedores locales",
  cat: "Desarrollo",
  tone: "azul",
  time: "10:00 a 18:00 hs"
}, {
  day: "24",
  mon: "JUN",
  title: "Maratón Ciudad de Catamarca 8K",
  cat: "Deporte",
  tone: "naranja",
  time: "08:30 hs · Inscripción previa"
}];
const NEWS = [{
  seed: "catamarca-plaza",
  cat: "Ciudad",
  tone: "azul",
  title: "Renovamos la peatonal del centro con más verde y sombra",
  date: "12 jun 2026"
}, {
  seed: "feria-local",
  cat: "Economía",
  tone: "lima",
  title: "Más de 200 emprendedores ya venden en los paseos de la ciudad",
  date: "10 jun 2026"
}, {
  seed: "turismo-cerro",
  cat: "Turismo",
  tone: "naranja",
  title: "Nuevos circuitos para descubrir los cerros en invierno",
  date: "08 jun 2026"
}];
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--cc-azul-oscuro)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: -20,
      top: -30,
      width: 460,
      height: 460,
      opacity: 0.12
    }
  }, Array.from({
    length: 7
  }).map((_, r) => Array.from({
    length: 7
  }).map((_, c) => c >= r && c <= 6 - 0 && (r + c) % 2 === 0 ? /*#__PURE__*/React.createElement("rect", {
    key: r + "-" + c,
    x: c * 26,
    y: r * 26,
    width: "22",
    height: "22",
    fill: "#fff"
  }) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP,
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 40,
      alignItems: "center",
      padding: "72px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cc-overline",
    style: {
      color: "var(--cc-amarillo-lima)",
      marginBottom: 14
    }
  }, "Gesti\xF3n Muni \xB7 Cerca tuyo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 62,
      lineHeight: 0.96,
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: 0
    }
  }, "La ciudad", /*#__PURE__*/React.createElement("br", null), "en movimiento"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.88)",
      fontSize: 18,
      lineHeight: 1.55,
      maxWidth: 440,
      marginTop: 18
    }
  }, "Tr\xE1mites, turnos, agenda y servicios para vecinos y vecinas. Todo m\xE1s simple, m\xE1s cerca y m\xE1s humano."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 26,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav("tramites")
  }, "Iniciar un tr\xE1mite"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: "#fff",
      border: "2px solid rgba(255,255,255,.4)"
    },
    onClick: () => onNav("agenda")
  }, "Ver la agenda"), /*#__PURE__*/React.createElement(ClaimChip, {
    color: "lima",
    style: {
      marginLeft: 4
    }
  }, "Va con vos!"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      aspectRatio: "4/3",
      border: "4px solid rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://picsum.photos/seed/catamarca-ciudad/800/600",
    alt: "Vecinos en la ciudad",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 16,
      background: "var(--cc-fucsia)",
      color: "#fff",
      fontFamily: "var(--font-claim)",
      fontSize: 20,
      padding: "6px 16px",
      borderRadius: 999
    }
  }, "Disfrut\xE1 la ciudad"))));
}
function QuickAccess({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...WRAP,
      marginTop: -36,
      position: "relative",
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border-subtle)",
      padding: 20,
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 8
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.label,
    onClick: () => onNav("tramites"),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      textAlign: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "14px 8px",
      borderRadius: "var(--radius-md)",
      transition: "background var(--dur-fast) var(--ease-out)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-sunken)",
    onMouseLeave: e => e.currentTarget.style.background = "none"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: s.color
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: s.icon,
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-bold)",
      fontSize: 14,
      color: "var(--text-strong)"
    }
  }, s.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, s.desc)))));
}
function SectionHead({
  kicker,
  title,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cc-overline",
    style: {
      color: "var(--cc-fucsia)",
      marginBottom: 6
    }
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 30,
      color: "var(--text-strong)"
    }
  }, title)), action && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onAction
  }, action));
}
function Agenda({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...WRAP,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Esta semana",
    title: "Agenda de la ciudad",
    action: "Ver toda la agenda",
    onAction: () => onNav("agenda")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, EVENTS.map(e => /*#__PURE__*/React.createElement(Card, {
    key: e.title,
    elevation: "sm",
    style: {
      padding: 0,
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      padding: 18,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      width: 58,
      textAlign: "center",
      background: "var(--cc-azul-institucional)",
      color: "#fff",
      borderRadius: "var(--radius-md)",
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontWeight: 900,
      fontSize: 26,
      lineHeight: 1
    }
  }, e.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: ".08em"
    }
  }, e.mon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: e.tone
  }, e.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 6px",
      fontSize: 17,
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "var(--text-muted)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: "clock",
    size: 14
  }), " ", e.time)))))));
}
function News() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...WRAP,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    kicker: "Novedades",
    title: "Lo que pasa en Catamarca",
    action: "M\xE1s noticias"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, NEWS.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n.title,
    elevation: "sm",
    style: {
      padding: 0,
      overflow: "hidden",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/10",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://picsum.photos/seed/${n.seed}/600/400`,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: n.tone
  }, n.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "10px 0 8px",
      fontSize: 18,
      lineHeight: 1.25,
      color: "var(--text-strong)"
    }
  }, n.title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-faint)",
      fontSize: 13
    }
  }, n.date))))));
}
function CtaBand({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...WRAP,
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cc-azul-oscuro)",
      borderRadius: "var(--radius-xl)",
      padding: "48px 56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontFamily: "var(--font-condensed)",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 44,
      letterSpacing: "-.02em",
      margin: "0 0 8px"
    }
  }, "Sumate a Mi Ciudad"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,.82)",
      fontSize: 17,
      margin: 0,
      maxWidth: 460
    }
  }, "Cre\xE1 tu cuenta y gestion\xE1 tus tr\xE1mites, turnos y reclamos desde un solo lugar.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: () => onNav("tramites")
  }, "Crear cuenta"), /*#__PURE__*/React.createElement(ClaimChip, {
    color: "lima",
    size: "lg"
  }, "Re va!"))));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(QuickAccess, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Agenda, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(News, null), /*#__PURE__*/React.createElement(CtaBand, {
    onNav: onNav
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/Tramites.jsx
try { (() => {
// Catamarca Capital — Trámites listing + detail
const {
  Button,
  Card,
  Badge,
  Tag,
  Input
} = window.CatamarcaCapitalDesignSystem_7eade0;
const WRAP_T = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 24px"
};
const CATS = ["Todos", "Habilitaciones", "Tasas", "Vehículos", "Ambiente", "Vecinos"];
const TRAMITES = [{
  id: 1,
  icon: "store",
  cat: "Habilitaciones",
  title: "Habilitación comercial",
  desc: "Iniciá la habilitación de tu local o emprendimiento.",
  time: "10 min",
  online: true
}, {
  id: 2,
  icon: "banknote",
  cat: "Tasas",
  title: "Pago de tasa municipal",
  desc: "Consultá y aboná tu tasa de servicios.",
  time: "3 min",
  online: true
}, {
  id: 3,
  icon: "car",
  cat: "Vehículos",
  title: "Libre deuda de vehículo",
  desc: "Solicitá el certificado de libre deuda.",
  time: "5 min",
  online: true
}, {
  id: 4,
  icon: "trees",
  cat: "Ambiente",
  title: "Poda y arbolado urbano",
  desc: "Pedí intervención sobre arbolado público.",
  time: "8 min",
  online: false
}, {
  id: 5,
  icon: "file-badge",
  cat: "Vecinos",
  title: "Certificado de domicilio",
  desc: "Tramitá tu certificado de residencia.",
  time: "6 min",
  online: true
}, {
  id: 6,
  icon: "recycle",
  cat: "Ambiente",
  title: "Retiro de reciclables (GIRO)",
  desc: "Coordiná el retiro en tu barrio.",
  time: "4 min",
  online: true
}];
function Tramites({
  onNav
}) {
  const [cat, setCat] = React.useState("Todos");
  const [q, setQ] = React.useState("");
  const list = TRAMITES.filter(t => (cat === "Todos" || t.cat === cat) && (t.title.toLowerCase().includes(q.toLowerCase()) || t.desc.toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cc-azul-institucional)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP_T,
      padding: "44px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-overline",
    style: {
      color: "var(--cc-celeste)",
      marginBottom: 10
    }
  }, "Gesti\xF3n Muni \xB7 Online"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-condensed)",
      fontWeight: 900,
      textTransform: "uppercase",
      fontSize: 52,
      letterSpacing: "-.02em",
      margin: "0 0 10px",
      color: "#fff"
    }
  }, "Tr\xE1mites y servicios"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "rgba(255,255,255,.85)",
      maxWidth: 520,
      margin: 0
    }
  }, "Resolv\xE9 tus gestiones desde el celular. R\xE1pido, simple y cerca tuyo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar un tr\xE1mite\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...WRAP_T,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 22
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: c === cat,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, list.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.id,
    elevation: "sm",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 14,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-primary-soft)"
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: t.icon,
    size: 22,
    color: "var(--cc-azul-institucional)"
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: t.online ? "success" : "naranja"
  }, t.online ? "Online" : "Presencial")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      color: "var(--text-strong)"
    }
  }, t.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-muted)",
      flex: 1
    }
  }, t.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 13,
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: "clock",
    size: 14
  }), " ", t.time), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Glyph, {
      d: "arrow-right",
      size: 16,
      color: "#fff"
    })
  }, "Iniciar"))))), list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "48px 0",
      color: "var(--text-muted)"
    }
  }, "No encontramos tr\xE1mites para \u201C", q, "\u201D. Prob\xE1 con otra palabra."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      background: "var(--cc-azul-oscuro)",
      borderRadius: "var(--radius-lg)",
      padding: "28px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: "phone-call",
    size: 28,
    color: "var(--cc-amarillo-lima)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 20,
      color: "#fff"
    }
  }, "\xBFNecesit\xE1s ayuda?"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,.82)",
      fontSize: 15
    }
  }, "Llam\xE1 al 311 o escribinos. Te acompa\xF1amos en cada paso."))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: () => onNav("inicio")
  }, "Volver al inicio"))));
}
Object.assign(window, {
  Tramites
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/Tramites.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ClaimChip = __ds_scope.ClaimChip;

__ds_ns.Mosca = __ds_scope.Mosca;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

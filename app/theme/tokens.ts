export const colors = {
  offWhite: "#F5F6FA",
  blueGray: "#E7E5DF",
  blueGrayDark: "#C8C7C0",
  mutedBlack: "#161513",
  mutedBlackLight: "#66635E",
  brand: "#2952DE",
  brandLight: "#5878E6",
  brandDeep: "#161513",
  accent: "#DCE4FA",
  accentLight: "#EDF1FC",
  accentHover: "#CED9F7",
  white: "#FFFFFF",
  divider: "#DAD8D2",
  success: "#27634B",
  successLight: "#E3ECE4",
} as const;

// Flat faces share one color. Only large work surfaces cast this paired light/shadow.
export const surfaces = {
  raised: "-12px -12px 22px rgba(255,255,255,0.98), 12px 14px 24px rgba(41,55,88,0.13)",
  glass: {
    backgroundColor: "rgba(245,246,250,0.84)",
    backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.42), rgba(255,255,255,0.04))",
    backdropFilter: "blur(28px) saturate(1.25)",
    WebkitBackdropFilter: "blur(28px) saturate(1.25)",
    border: "1px solid rgba(255,255,255,0.75)",
    boxShadow: "0 24px 72px rgba(41,55,88,0.2)",
    "@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)))": {
      backgroundColor: "#F5F6FA",
    },
  },
} as const;

export const typography = {
  fontFamily: '"futura-pt", "Gill Sans", "Gill Sans MT", "Helvetica Neue", Arial, sans-serif',
  fontFamilyDisplay: '"futura-pt", "Gill Sans", "Gill Sans MT", "Helvetica Neue", Arial, sans-serif',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  xxl: 64,
} as const;

export const borderRadius = {
  sm: 4,
  md: 4,
  popover: 8,
  dialog: 12,
  // Keep the approved neumorphic work surfaces at 16px.
  lg: 16,
  pill: 999,
} as const;

export const motion = {
  fast: 120,
  view: 180,
  enter: 240,
  exit: 160,
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

// Reserved for the brand and activity strip, never painted over raised faces.
export const gradients = {
  accent: `linear-gradient(115deg, ${colors.accentLight} 0%, ${colors.accent} 60%, ${colors.accentHover} 100%)`,
  brand: "linear-gradient(125deg, #161513 0%, #2952DE 65%, #5878E6 100%)",
} as const;

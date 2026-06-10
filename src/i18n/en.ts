export const en = {
  locale: "en",
  languageName: "English",
  nav: { home: "Screen Doctor, home", offline: "Works offline", language: "Change language" },
  hero: {
    eyebrow: "Display diagnostics",
    title: "Every pixel",
    titleAccent: "matters.",
    description:
      "Professional screen check for dead pixels, backlight bleed, burn-in, banding, and ghosting. No registration. Just press start.",
    start: "Start the check",
    manual: "Manual mode",
    fullscreenNote: "Your browser may ask for permission to enter fullscreen mode.",
    pixelScan: "Pixel scan",
    hzMotion: "Hz motion",
  },
  stats: { tests: "precision tests", auto: "automatic cycle", local: "runs locally", seconds: "s" },
  preview: {
    eyebrow: "Full coverage",
    title: "From pure white",
    titleAccent: "to fast motion.",
    description:
      "{count} carefully selected scenes help reveal display defects that are easy to miss during normal use.",
    cards: [
      ["Pure colors", "Dead and stuck pixels"],
      ["Gradients", "Banding and color reproduction"],
      ["Geometry", "Panel alignment and artifacts"],
      ["Motion", "Ghosting, trails, and stutter"],
    ],
  },
  runner: {
    finish: "Finish",
    previous: "Previous test",
    next: "Next test",
    auto: "Auto",
    manual: "Manual",
    motionLabel: "Animated motion test",
  },
  result: {
    eyebrow: "Check complete",
    title: "How does your display look?",
    description:
      "We showed every pattern. The final assessment is yours — no screen image was captured or transmitted.",
    notes: ["Colors are uniform", "No stuck pixels", "Motion looks smooth"],
    repeat: "Run again",
    home: "Back home",
  },
  footer: {
    tagline: "Built for honest device checks.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    github: "GitHub repository",
    linkedin: "Alexander Tartmin on LinkedIn",
    navigation: "Legal and social links",
  },
  tests: {
    white: ["White", "Look for dark pixels, spots, and uneven brightness"],
    black: ["Black", "In a dark room, check for backlight bleed and bright pixels"],
    red: ["Red", "Look for pixels showing a different color"],
    green: ["Green", "Look for pixels showing a different color"],
    blue: ["Blue", "Look for pixels showing a different color"],
    yellow: ["Yellow", "Check color uniformity"],
    magenta: ["Magenta", "Check color uniformity"],
    cyan: ["Cyan", "Check color uniformity"],
    "gradient-h": ["Horizontal gradient", "Transitions should be smooth and free of bands"],
    "gradient-v": ["Vertical gradient", "Transitions should be smooth and free of bands"],
    "gradient-r": ["Radial gradient", "Look for rings and unevenness"],
    checker: ["Checkerboard", "Check geometry and residual artifacts"],
    grid: ["Grid", "Lines should be straight and evenly spaced"],
    contrast: ["High-contrast pixels", "Look for flicker and dead pixels"],
    "oled-rgb": ["OLED RGB", "Look for shadows left by static interface elements"],
    "oled-gray": ["OLED Gray", "Burn-in is easiest to spot on a gray background"],
    "banding-dark": ["Dark gradient", "The dark transition should have no visible steps"],
    "banding-color": ["Color gradient", "Look for abrupt bands in color transitions"],
    motion: ["Motion test", "Watch for stutter, trails, and ghosting"],
    "motion-inverse": ["Inverse motion", "Look for dark trails behind bright objects"],
  },
  legal: {
    back: "Back home",
    updated: "Last updated: June 10, 2026",
    privacyTitle: "Privacy Policy",
    privacyIntro:
      "Screen Doctor is built around data minimization. Display diagnostics run locally in your browser.",
    privacySections: [
      [
        "Data we process",
        "We do not capture your screen, require registration, or collect your name, email, or other personal information to run tests.",
      ],
      [
        "Analytics",
        "We use Vercel Web Analytics for aggregated statistics such as page views, referral sources, device types, and automatic versus manual mode usage. Analytics is cookie-free and is not intended to identify individuals.",
      ],
      [
        "Local storage",
        "Your language preference and offline files may be stored locally in your browser. You can remove them through your browser settings.",
      ],
      [
        "Third parties",
        "The site is hosted on Vercel. Vercel's processing of technical data is governed by Vercel's policies.",
      ],
      ["Contact", "For privacy questions, email {email}."],
    ],
    termsTitle: "Terms of Service",
    termsIntro:
      "By using Screen Doctor, you agree to these terms. If you do not agree, do not use the service.",
    termsSections: [
      [
        "Service provided “as is”",
        "Screen Doctor is provided free of charge, “as is” and “as available.” We make no express or implied warranties regarding accuracy, availability, fitness, or error-free operation.",
      ],
      [
        "Not professional diagnostics",
        "Results are a visual aid and depend on your perception, browser, and device. They do not replace diagnosis by a qualified professional.",
      ],
      [
        "Limitation of liability",
        "To the maximum extent permitted by law, the author and contributors are not liable for any direct, indirect, incidental, or consequential damages, or for decisions involving purchase, repair, or use of a device.",
      ],
      [
        "Your responsibilities",
        "You independently assess the device and remain responsible for decisions made using the service. Do not use the service unlawfully or to cause harm.",
      ],
      ["Changes", "The service and these terms may be changed or discontinued without notice."],
      ["Contact", "For questions about these terms, email {email}."],
    ],
  },
} as const;

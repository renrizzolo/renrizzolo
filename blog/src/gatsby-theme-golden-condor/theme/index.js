import theme from "gatsby-theme-golden-condor/src/theme";

const themeKey =
  typeof window !== "undefined"
    ? localStorage.getItem("theme") || "florence"
    : "florence";

const rrThemes = {
  brune: {
    primary: ["#0f3b48", "#a0405f", "#689cab", "#689cab", "#f4d9d2", "#F7E1D7"],
    secondary: [
      "#971c44",
      "#a0405f",
      "#a0405f",
      "#d59cae",
      "#EDAFB8",
      "#EDAFB8",
    ],
    background: "#ffffff",
    backgroundDark: "#13121a",
    muted: "#fceef0",
    mutedDark: "#1d1a2b",
  },
  florence: {
    primary: ["#13121a", "#36107e", "#130b3c", "#e88370", "#ffd4c3", "#fce4ec"],
    secondary: [
      "#1d1a2b",
      "#130b3c",
      "#36107e",
      "#261c57",
      "#f8bbd0",
      "#fce4ec",
    ],
    background: "#ffffff",
    backgroundDark: "#13121a",
    muted: "#fceef0",
    mutedDark: "#1d1a2b",
  },
  flatline: {
    primary: ["#273043", "#32446B", "#32446B", "#787E96", "#9197AE", "#fceef0"],
    secondary: [
      "#273043",
      "#32446B",
      "#32446B",
      "#787E96",
      "#9197AE",
      "#fceef0",
    ],
    background: "#ffffff",
    backgroundDark: "#181e2c",
    muted: "#fceef0",
    mutedDark: "#1d1a2b",
  },
  blanche: {
    primary: theme.colors.gray,
    secondary: theme.colors.gray,
    fonts: {
      heading:
        '"Palatino Linotype", "Book Antiqua", Palatino, Times New Roman, serif',
    },
    background: "#ffffff",
    backgroundDark: "#000000",
    muted: "#dadada",
    mutedDark: "#333",
  },
};

const {
  primary,
  secondary,
  background,
  backgroundDark,
  muted,
  mutedDark,
  fonts,
} = rrThemes[themeKey];
const primaryDark = [...primary].reverse();
const secondaryDark = [...secondary].reverse();
const navHeight = { 0: 66, 1: 82 };

const myTheme = {
  ...theme,

  layout: {
    container: {
      maxWidth: 1200,
    },
    post: {
      maxWidth: 1024,
    },
    article: {
      maxWidth: 768,
    },
  },
  space: {
    ...theme.space,
    navHeight,
  },
  sizes: {
    ...theme.sizes,
    navHeight,
  },
  styles: {
    ...theme.styles,
    root: {
      body: {
        marginTop: [0, "navHeight.1"],
      },
      "article h2, article h3": {
        scrollMarginTop: "navHeight.1",
      },
      "#gtgc-toc": {
        top: "navHeight.1",
      },
      ...theme.styles.root,
    },
    pre: {
      ...theme.styles.pre,
      code: {
        ...theme.styles.pre.code,
        "html.light &": {
          backgroundColor: "dark",
        },
      },
    },
  },
  colors: {
    ...theme.colors,
    primary,
    secondary,
    // gray,
    background,
    codeBg: theme.colors.dark,
    codeColor: theme.colors.muted,
    muted,
    modes: {
      dark: {
        ...theme.colors.modes.dark,
        primary: primaryDark,
        secondary: secondaryDark,
        codeBg: theme.colors.dark,
        codeColor: theme.colors.muted,
        background: backgroundDark,
        muted: mutedDark,
      },
    },
  },
  fonts: {
    ...theme.fonts,
    heading: `"Muli", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    body: `"Muli", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    serif:
      '"Palatino Linotype", "Book Antiqua", Palatino, Times New Roman, serif',
    ...fonts,
  },
};

export default myTheme;

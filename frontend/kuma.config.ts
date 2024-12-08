import { createTheme } from "@kuma-ui/core";

const colorsTheme = {
  colors: {
    primary: {
      light: "#66b3ff",
      main: "#0060ff",
      dark: "#003399",
    },
    white: {
      main: "#ffffff",
      second: "#e0e0e0",
    },
    background: {
      main: "#ffffff",
      second: "#e0e0e0",
    },
  },
};

const theme = createTheme({
  ...colorsTheme,
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  },
  components: {
    Button: {
      defaultProps: {
        width: "100%",
        p: 8,
        cursor: "pointer",
        borderRadius: 4,
      },
      variants: {
        contained: {
          color: "white",
          border: `none`,
          bg: colorsTheme.colors.primary.main,
          _hover: {
            bg: colorsTheme.colors.primary.light,
          },
        },
        outlined: {
          color: colorsTheme.colors.primary.main,
          border: `1px solid ${colorsTheme.colors.primary.main}`,
          bg: colorsTheme.colors.background.main,
          _hover: {
            bg: colorsTheme.colors.background.second,
          },
        },
        text: {
          color: colorsTheme.colors.primary.main,
          border: `none`,
          bg: "transparent",
          textAlign: "right",
        },
      },
    },
  },
});

declare module "@kuma-ui/core" {
  export type UserTheme = typeof theme;
}

export default theme;

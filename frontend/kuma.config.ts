import { createTheme } from "@kuma-ui/core";

const colorsTheme = {
  colors: {
    primary: {
      light: "#66b3ff",
      main: "#0060ff",
      dark: "#003399",
    },
  },
};

const theme = createTheme({
  ...colorsTheme,
  components: {
    Button: {
      defaultProps: {
        bg: colorsTheme.colors.primary.main,
        color: "white",
        p: 8,
        borderRadius: 4,
        border: "none",
        width: "100%",
        cursor: "pointer",
        boxShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
        _hover: {
          bg: colorsTheme.colors.primary.light,
        },
      },
    },
  },
});

export type UserTheme = typeof theme;
export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F2682A",
      dark: "#202027",
      light: "#FEF1EC",
    },
    text: {
      primary: "#30303B",
    },
  },
  typography: {
    fontFamily: "'Public Sans', sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            "& fieldset": {
              borderColor: "#D1D5DB",
            },
            "&:hover fieldset": {
              borderColor: "#D1D5DB",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D1D5DB !important",
              borderWidth: "1px",
            },
          },
        },
      },
    },
  },
});

export default theme;

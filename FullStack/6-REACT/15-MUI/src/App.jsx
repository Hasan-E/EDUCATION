import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import MuiAppBar from "./components/MuiAppBar";
import MuiFormElement from "./components/MuiFormElement";
import BasicGrid from "./components/MuiGrid";
import MuiTypography from "./components/MuiTypography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a12345",
    },
    secondary: {
      main: "#154360",
    },
  },
  typography: {
    fontFamily: "'Lato',sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bolder",
          border: "3px solid red",
        },
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiAppBar />
        <MuiTypography />
        <MuiFormElement />
        <BasicGrid />
      </ThemeProvider>
    </>
  );
}

export default App;

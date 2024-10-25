import React, { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./components/theme/theme";
import Routers from "./routers/routers";
import { TotalContext } from "./components/usecontext/usecontext";

export default function App() {
  const { theme } = useContext(TotalContext);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

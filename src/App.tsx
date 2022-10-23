import React from "react";
import "./App.css";
import { Connect4 } from "./components/Connect4";
import { createTheme, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({ palette: { mode: "dark" } });
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        {/*<header className="App-header">head</header>*/}
        <Connect4 />
      </ThemeProvider>
    </div>
  );
}

export default App;

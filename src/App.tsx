import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./theme/lightMode.module.scss";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

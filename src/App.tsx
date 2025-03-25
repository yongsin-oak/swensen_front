import { BrowserRouter } from "react-router-dom";
import Routers from "./routes";
import './i18n';
function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;

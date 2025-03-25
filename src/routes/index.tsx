import { Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../layout/Navbar";

const Routers = () => {

  return (
    <Navbar>
      <Routes>
        <Route path="/:lang" element={<Home />} />
      </Routes>
    </Navbar>
  );
};

export default Routers;

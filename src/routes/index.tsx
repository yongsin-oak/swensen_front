import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../layout/navbar";

const Routers = () => {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Navbar>
  );
};

export default Routers;

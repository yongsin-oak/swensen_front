import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../layout/Navbar";
import Container from "../layout/Container";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const Routers = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];
  return (
    <Navbar>
      <Container>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </Container>
    </Navbar>
  );
};

export default Routers;

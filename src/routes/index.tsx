import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../layout/Navbar";
import Container from "../layout/Container";
import Auth from "../pages/Auth";

const Routers = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/register",
      element: <Auth />,
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

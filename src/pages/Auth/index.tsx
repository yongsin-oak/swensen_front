import { useLocation } from "react-router-dom";
import HiddenCol from "../../components/HiddenCol";
import Register from "./Register";
import Login from "./Login";

const Auth = () => {
  const location = useLocation();
  const pathRegister = location.pathname === "/register";
  return (
    <div className="m-auto max-w-[1440px] px-6 h-full py-10">
      <div className="relative w-full xl:min-h-screen grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-8 h-full">
        <HiddenCol />
        {pathRegister ? <Register /> : <Login />}
        <HiddenCol />
        <div className="absolute inset-y-0 right-0 hidden h-full min-h-screen w-2/5 shrink-0 grow md:col-span-5 lg:block">
          <img
            src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fbanner%2Fregister-banner.jpg&w=3840&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;

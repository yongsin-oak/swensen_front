import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import { useTheme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}
const Navbar = ({ children }: Props) => {
  return (
    <>
      <header className="sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-background-white px-4 [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex">
        <div className="p-3 w-full">
          <div className="flex w-full items-center justify-between">
            <Text h1>Swensen</Text>
            <div>
              <Button>
                <Text h2 color="white" >
                  เข้าสู่ระบบ / ลงทะเบียน
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {children}
    </>
  );
};

export default Navbar;

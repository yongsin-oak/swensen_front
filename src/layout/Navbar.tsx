import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import Flex from "../components/Flex";

interface Props {
  children: React.ReactNode;
}
const Navbar = ({ children }: Props) => {
  return (
    <>
      <header className="sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-background-white px-4 [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex">
        <div className="p-3 max-w-[1440px] mx-auto w-full">
          <Flex className="w-full" justify="between">
            <Text h1>Swensen</Text>
            <Flex className=" gap-4">
              <Button>
                <Text h2 color="white">
                  เข้าสู่ระบบ / ลงทะเบียน
                </Text>
              </Button>
              <Flex>
                <Text textTitleMd>TH</Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </header>
      {children}
    </>
  );
};

export default Navbar;

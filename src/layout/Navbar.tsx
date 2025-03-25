import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import Flex from "../components/Flex";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
const Navbar = ({ children }: Props) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathBasket = location.pathname === "/";
  return (
    <>
      <header className="sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-white px-4 [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex">
        <div className="p-3 max-w-[1440px] mx-auto w-full">
          <Flex className="w-full" justify="between">
            <Text h1>Swensen</Text>
            <Flex className="gap-4" justify="between">
              {pathBasket && (
                <Button className="flex items-center gap-2">ตะกล้า</Button>
              )}
              <Button>
                {t("global.login")} / {t("global.register")}
              </Button>
              <Flex
                className="gap-2 cursor-pointer"
                onClick={() => {
                  if (i18n.language === "en") {
                    i18n.changeLanguage("th");
                  } else {
                    i18n.changeLanguage("en");
                  }
                }}
              >
                <div>โลก</div>
                <Text textTitleMd>{i18n.language.toLocaleUpperCase()}</Text>
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

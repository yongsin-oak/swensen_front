import React from "react";
import Text from "../components/Text";
import Button from "../components/Button";
import Flex from "../components/Flex";
import { useLocalization } from "../store/LocalizationZustand";

interface Props {
  children: React.ReactNode;
}
const Navbar = ({ children }: Props) => {
  const { locale, setLocale, t } = useLocalization();
  return (
    <>
      <header className="sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-background-white px-4 [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex">
        <div className="p-3 max-w-[1440px] mx-auto w-full">
          <Flex className="w-full" justify="between">
            <Text h1>Swensen</Text>
            <Flex className="gap-4">
              <div>ตะกร้า</div>
              <Button>
                {t("Navbar.login")} / {t("Navbar.register")}
              </Button>
              <Flex
                className="gap-2 cursor-pointer"
                onClick={() => {
                  if (locale === "en") {
                    setLocale("th");
                  } else {
                    setLocale("en");
                  }
                }}
              >
                <div>โลก</div>
                <Text textTitleMd>{locale.toLocaleUpperCase()}</Text>
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

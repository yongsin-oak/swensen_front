import BackButton from "../../../components/BackButton";
import Flex from "../../../components/Flex";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import HiddenCol from "../../../components/HiddenCol";
import Input from "../../../components/Input";
import Radio from "../../../components/Radio";

const Register = () => {
  const { t } = useTranslation();
  const tPath = "Pages.Register";
  const tPathInput = "Pages.Register.inputFields";
  const inputField = [
    {
      name: "firstName",
      label: t(`${tPathInput}.firstName`),
      placeholder: t(`${tPathInput}.firstName`),
    },
    {
      name: "lastName",
      label: t(`${tPathInput}.lastName`),
      placeholder: t(`${tPathInput}.lastName`),
    },
    {
      name: "email",
      label: t(`${tPathInput}.email`),
      placeholder: t(`${tPathInput}.email`),
    },
    {
      name: "password",
      label: t(`${tPathInput}.password`),
      placeholder: t(`${tPathInput}.password`),
    },
    {
      name: "dateOfBirth",
      label: t(`${tPathInput}.dateOfBirth`),
      placeholder: t(`${tPathInput}.dateOfBirthPlaceholder`),
    },
    {
      name: "phoneNumber",
      label: t(`${tPathInput}.phoneNumber`),
      placeholder: t(`${tPathInput}.phoneNumber`),
    },
  ];
  return (
    <div className="m-auto max-w-[1440px] px-6 h-full py-10">
      <div className="relative w-full xl:min-h-screen grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-8 h-full">
        <HiddenCol />
        <Flex
          className="col-span-full lg:col-span-5 w-full"
          justify="start"
          direction="col"
        >
          <Flex justify="between" className="w-full">
            <BackButton></BackButton>
            <Flex className=" gap-2">
              <Text textTitleMd>{t("Pages.Register.alreadyHaveAccount")}</Text>
              <Button outline>{t("global.login")}</Button>
            </Flex>
          </Flex>
          <Card className=" mt-6">
            <Text size="46px" bold className=" text-left">
              {t(`${tPath}.title`)}
            </Text>
            <div className=" grid grid-cols-2 gap-4">
              {inputField.map((field, index) => (
                <Input
                  key={index}
                  label={field.label}
                  placeholder={field.placeholder}
                  name={field.name}
                  required
                />
              ))}
            </div>
            <div className=" flex w-full flex-col gap-4">
              <Text className="text-label-medium">
                {t(`${tPathInput}.gender`)}
              </Text>
              <div className="flex flex-col gap-1">
                <Radio
                  label={t(`${tPathInput}.male`)}
                  name="gender"
                  value="male"
                />
                <Radio
                  label={t(`${tPathInput}.female`)}
                  name="gender"
                  value="female"
                />
                <Radio
                  label={t(`${tPathInput}.notSpecified`)}
                  name="gender"
                  value="notSpecified"
                />
              </div>
            </div>
            <hr />
          </Card>
        </Flex>
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

export default Register;

import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import Radio from "../../../components/Radio";
import CardAuth from "../../../components/CardAuth";
import { useState } from "react";

const Register = () => {
  const { t } = useTranslation();
  const tPath = "Pages.Register";
  const tPathInput = "Pages.Register.inputFields";
  const registerInputField = [
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
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = (event: React.MouseEvent<unknown>) => {
    if ((event.target as HTMLElement).tagName === "A") {
      event.preventDefault();
    } else {
      setChecked((prev) => !prev);
    }
  };
  return (
    <CardAuth
      inputField={registerInputField}
      containerInputClass="grid-cols-2"
      submitButtonText={t(`${tPath}.submit`)}
      topButtonDesc={t("Pages.Register.alreadyHaveAccount")}
      topButtonText={t("global.login")}
      cardTitle={t(`${tPath}.title`)}
    >
      <div className="flex w-full flex-col gap-4">
        <Text className="text-label-medium">{t(`${tPathInput}.gender`)}</Text>
        <div className="flex flex-col gap-1">
          <Radio label={t(`${tPathInput}.male`)} name="gender" value="male" />
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
        <hr />
        <div className="w-full flex items-center gap-2">
          <input
            type="checkbox"
            name="termOfUse"
            id="termOfUse"
            checked={checked}
            onClick={handleCheckboxClick}
          />
          <label htmlFor="termOfUse" className="text-label-normal">
            {t(`${tPath}.terms1`)}
            <a
              className="cursor-pointer text-blue-500 underline"
              onClick={handleCheckboxClick}
            >
              {t(`${tPath}.terms2`)}
            </a>
            {t(`${tPath}.terms3`)}
            <a
              className="cursor-pointer text-blue-500 underline"
              onClick={handleCheckboxClick}
            >
              {t(`${tPath}.terms4`)}
            </a>
            {t(`${tPath}.terms5`)}
          </label>
        </div>
        <div className="w-full flex items-center gap-2">
          <input type="checkbox" name="termOfUse" id="termOfUse" />
          <label htmlFor="termOfUse" className="text-label-normal">
            {t(`${tPath}.receiveInfo1`)}
            <a
              className="cursor-pointer text-blue-500 underline"
              onClick={handleCheckboxClick}
            >
              {t(`${tPath}.receiveInfo2`)}
            </a>
            {t(`${tPath}.receiveInfo3`)}
            <a
              className="cursor-pointer text-blue-500 underline"
              onClick={handleCheckboxClick}
            >
              {t(`${tPath}.receiveInfo4`)}
            </a>
            {t(`${tPath}.receiveInfo5`)}
          </label>
        </div>
      </div>
    </CardAuth>
  );
};

export default Register;

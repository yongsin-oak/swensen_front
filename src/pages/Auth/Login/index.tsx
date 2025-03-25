import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Text from "../../../components/Text";
import Radio from "../../../components/Radio";
import CardAuth from "../../../components/CardAuth";

const Login = () => {
  const { t } = useTranslation();
  const tPath = "Pages.Login";
  const tPathInput = "Pages.Login.inputFields";
  const registerInputField = [
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
      containerInputClass="grid-cols-1"
      submitButtonText={t(`${tPath}.submit`)}
      topButtonDesc={t(`${tPath}.noAccount`)}
      topButtonText={t("Pages.Register.submit")}
      cardTitle={t(`${tPath}.title`)}
    >
      <Text
        className="cursor-pointer text-label-medium"
        color="rgb(37, 120, 229)"
        onClick={() => {}}
      >
        {t(`${tPath}.forgotPassword`)}
      </Text>
    </CardAuth>
  );
};

export default Login;

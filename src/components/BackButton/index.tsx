import Flex from "../Flex";
import Text from "../Text";
import { useTranslation } from "react-i18next";

interface Props {
  text?: string;
}
const BackButton = ({ text }: Props) => {
  const { t } = useTranslation();
  const translatedText = t("Components.BackButton.back");
  return (
    <Flex>
      <Text textTitleMd>{`<  ${text || translatedText}`}</Text>
    </Flex>
  );
};

export default BackButton;

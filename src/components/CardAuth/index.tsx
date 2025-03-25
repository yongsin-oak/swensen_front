import Card from "../Card";
import Flex from "../Flex";
import BackButton from "../BackButton";
import Button from "../Button";
import Text from "../Text";
import Input, { InputProps } from "../Input";
import { cn } from "../../utils/cn";

interface Props {
  inputField: InputProps[];
  topButtonDesc?: string;
  topButtonText?: string;
  cardTitle?: string;
  containerInputClass?: string;
  submitButtonText?: string;
  children?: React.ReactNode;
}
const CardAuth = ({
  inputField,
  topButtonDesc,
  topButtonText,
  cardTitle,
  containerInputClass,
  submitButtonText,
  children,
}: Props) => {
  return (
    <Flex
      className="col-span-full lg:col-span-5 w-full"
      justify="start"
      direction="col"
    >
      <Flex justify="between" className="w-full">
        <BackButton />
        <Flex className="gap-2">
          <Text textTitleMd>{topButtonDesc}</Text>
          <Button outline>{topButtonText}</Button>
        </Flex>
      </Flex>
      <Card className="mt-6">
        <Text size="46px" bold className=" text-left">
          {cardTitle}
        </Text>
        <div className={cn("grid gap-4", containerInputClass)}>
          {inputField.map((field, index) => (
            <Input key={index} required {...field} />
          ))}
        </div>
        {children}
        <Button className="mt-6">{submitButtonText}</Button>
      </Card>
    </Flex>
  );
};

export default CardAuth;

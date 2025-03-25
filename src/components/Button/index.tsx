import { cn } from "../../utils/cn";
import Text from "../Text";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
}
const Button = ({ children, outline, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "font-medium relative max-w-full cursor-pointer px-4 py-1 md:h-[48px] md:py-1 rounded-full h-[48px]",
        className,
        outline
          ? "border-1 border-band text-band"
          : "bg-band text-white border-0"
      )}
      {...props}
    >
      <Text h2>{children}</Text>
    </button>
  );
};

export default Button;

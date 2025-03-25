
import React from "react";
import { cn } from "../../utils/cn";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  justify?: "center" | "start" | "end" | "between" | "around" | "evenly";
  align?: "center" | "start" | "end" | "baseline" | "stretch";
  direction?: "row" | "col";
  className?: string;
}
const Flex = ({
  children,
  justify,
  align,
  className,
  ...props
}: Props) => {
  const justifyClass = justify ? `justify-${justify}` : "justify-center";
  const alignClass = align ? `items-${align}` : "items-center";
  const directionClass = `flex-${props.direction || "row"}`;
  return (
    <div
      className={cn(
        "flex",
        justifyClass,
        alignClass,
        directionClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Flex;

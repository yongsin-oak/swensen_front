import React from "react";
import { cn } from "../../utils/cn";

type TextProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  s1?: boolean;
  s2?: boolean;
  s3?: boolean;
  textTitleMd?: boolean;
  size?: string;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  weightBlack?: boolean;
  center?: boolean;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const allowedProps = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "s1",
  "s2",
  "s3",
  "textTitleMd",
  "medium",
  "semiBold",
  "bold",
  "weightBlack",
  "center",
];

const Text: React.FC<TextProps> = ({
  children,
  size,
  className,
  style,
  ...props
}) => {
  const domProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !allowedProps.includes(key))
  );

  return (
    <span
      className={cn(
        props.h1 && "text-4xl",
        props.h2 && "text-3xl",
        props.h3 && "text-2xl",
        props.h4 && "text-xl",
        props.h5 && "text-lg",
        props.h6 && "text-base",
        props.s1 && "text-sm",
        props.s2 && "text-xs",
        props.s3 && "text-[10px]",
        props.medium && "font-medium",
        props.semiBold && "font-semibold",
        props.weightBlack && "font-black",
        props.bold && "font-bold",
        props.center && "text-center",
        props.textTitleMd && "text-title-md-medium",
        className
      )}
      style={{
        color: props.color || "black",
        fontSize: size,
        ...style,
      }}
      {...domProps}
    >
      {children}
    </span>
  );
};

export default Text;

import React from "react";
import { cn } from "../../utils/cn";

const Card = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "mx-auto size-full rounded-[10px] bg-white p-10 shadow-xs md:p-10 flex h-full flex-col gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

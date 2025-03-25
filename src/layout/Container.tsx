import React from "react";

interface Props {
  children: React.ReactNode;
}
const Container = ({ children }: Props) => {
  return (
    <section className="h-max w-full md:min-h-[calc(100vh-110px-88px)] bg-content">
        {children}
    </section>
  );
};

export default Container;

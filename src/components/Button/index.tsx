interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className=" font-medium bg-band relative max-w-full cursor-pointer px-4 py-1 md:h-[48px] md:py-1 rounded-full border-none focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled h-[48px] shrink-0 pt-4"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

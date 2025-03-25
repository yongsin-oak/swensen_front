interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="relative max-w-full cursor-pointer px-4 py-3 text-title-md-medium md:h-[48px] md:py-3 rounded-full border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled h-[48px] shrink-0 pt-4"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

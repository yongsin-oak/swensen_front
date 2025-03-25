import { useTheme } from "@emotion/react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  stlye?: React.CSSProperties;
}
const Button = ({ children, stlye, ...props }: Props) => {
  const theme = useTheme();
  return (
    <button
      style={{
        backgroundColor: theme.red100_,
        color: theme.white100_,
        ...stlye,
      }}
      className="relative max-w-full cursor-pointer px-4 py-3 text-title-md-medium md:h-[48px] md:py-3 rounded-full border-none bg-background-brand fill-text-invert text-text-primary-invert hover:bg-state-layer-brand-hover focus:bg-state-layer-brand-focussed focus:fill-text-brand focus:text-text-brand disabled:bg-state-layer-primary-disabled h-[48px] shrink-0 pt-4"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

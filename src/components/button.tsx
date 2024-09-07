import cn from 'classnames';

interface Props {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;

  className?: string;
  variant?: keyof typeof buttonStyle.variant;
}

export default function Button({
  type,
  disabled,
  onClick,
  children,
  className,
  variant,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyleGenerator({ variant, className })}
    >
      {children}
    </button>
  );
}

const buttonStyle = {
  default:
    'outline-none px-2 py-1 duration-200 disabled:text-zinc-700 disabled:cursor-not-allowed',
  variant: {
    old: cn(
      'border-2 p-1 leading-3',
      'border-b-zinc-700 border-zinc-100 border-r-zinc-700 bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-50 text-black',
      'dark:bg-transparent dark:text-cyan dark:border-transparent dark:hover:bg-cyan/40',
    ),
    gold: cn(
      'border-2 p-1 leading-3',
      'border-yellow-100 border-b-yellow-700 border-r-yellow-700 bg-yellow-300  hover:bg-yellow-400 active:bg-yellow-50',
      'dark:bg-cyan/80 dark:hover:bg-cyan dark:border-transparent dark:text-black',
    ),
  },
};

export const buttonStyleGenerator = (config?: {
  className?: string;
  variant?: keyof typeof buttonStyle.variant;
}) => {
  return cn(
    config?.className,
    buttonStyle.default,
    buttonStyle.variant[config?.variant ?? 'old'],
  );
};

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
    old: 'border-2 border-b-zinc-700 border-zinc-100 border-r-zinc-700 bg-zinc-300 p-1 leading-3 hover:bg-zinc-400 active:bg-zinc-50',
    gold: 'border-2 border-yellow-100 border-b-yellow-700 border-r-yellow-700 bg-yellow-300 p-1 leading-3 hover:bg-yellow-400 active:bg-yellow-50',
    outline:
      'bg-transparent hover:bg-zinc-800/20 active:bg-zinc-800/60 border-2 border-zinc-400 disabled:border-zinc-700 disabled:bg-transparent font-bold text-zinc-200',
    solid:
      'bg-zinc-800 disabled:bg-zinc-800 active:bg-zinc-500 font-bold text-zinc-200 hover:bg-zinc-700 rounded-md',
    text: 'bg-transparent text-white font-bold active:bg-zinc-400/10 disabled:bg-transparent',
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
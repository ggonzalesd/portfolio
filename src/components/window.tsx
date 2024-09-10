import cn from 'classnames';
import Button from './button';

interface Props {
  title: string;
  children?: React.ReactNode;
  className?: string;
  hideCloseButton?: boolean;
}

export default function Window({ title, children, hideCloseButton }: Props) {
  return (
    <div
      className={cn(
        'border-4 dark:rounded-t-xl dark:border-[1px] dark:border-cyan/50',
        children,
      )}
    >
      <div
        className={cn(
          'flex w-full items-center justify-between bg-gradient-to-r',
          'from-secondary to-primary',
          'dark:rounded-t-xl dark:from-secondarydark dark:to-primarydark',
        )}
      >
        <h2 className='px-2'>{title}</h2>
        {!hideCloseButton && (
          <Button disabled className='dark:rounded-tr-lg'>
            X
          </Button>
        )}
      </div>
      {children}
    </div>
  );
}

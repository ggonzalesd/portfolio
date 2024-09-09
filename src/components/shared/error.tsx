import cn from 'classnames';
import { BiSolidError } from 'react-icons/bi';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Error({ children, className }: Props) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div
        className={cn(
          'relative flex w-9/12 flex-col justify-center gap-2 bg-gradient-to-r px-2',
          'from-secondary to-primary',
          'border-[1px] dark:rounded-lg dark:from-secondarydark dark:to-primarydark',
        )}
      >
        <div className='flex w-full items-center gap-2'>
          <BiSolidError />
          <span>Error</span>
        </div>
        {children && <div className={className}>{children}</div>}
      </div>
    </div>
  );
}

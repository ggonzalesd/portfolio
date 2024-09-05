import { BiSolidError } from 'react-icons/bi';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Error({ children, className }: Props) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='from-secondary to-primary relative flex w-9/12 flex-col justify-center gap-2 border-4 bg-gradient-to-r px-2'>
        <div className='flex w-full items-center gap-2'>
          <BiSolidError />
          <span>Error</span>
        </div>
        {children && <div className={className}>{children}</div>}
      </div>
    </div>
  );
}

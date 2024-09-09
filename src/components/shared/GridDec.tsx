import cn from 'classnames';

interface Props {
  className?: string;
}

export default function GridDec({ className }: Props) {
  return (
    <div className={cn('grid grid-cols-6', className)}>
      {[...new Uint8Array(36)].map((_, index) => (
        <div key={index} className='h-10 w-10 border-[1px] border-white/10' />
      ))}
    </div>
  );
}

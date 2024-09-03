import cn from 'classnames';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: Props) {
  return (
    <section className='w-full'>
      <div className={cn('mx-auto w-full max-w-screen-lg', className)}>
        {children}
      </div>
    </section>
  );
}

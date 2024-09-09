import React from 'react';
import cn from 'classnames';

interface Props {
  children?: React.ReactNode;
  className?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export default function Section({ children, className, before, after }: Props) {
  return (
    <section className='w-full'>
      {before}
      <div
        className={cn('mx-auto w-full max-w-screen-lg px-2 sm:px-0', className)}
      >
        {children}
      </div>
      {after}
    </section>
  );
}

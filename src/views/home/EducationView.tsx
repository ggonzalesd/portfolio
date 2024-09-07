import React, { Suspense } from 'react';
import cn from 'classnames';

import { useTypedTranslation } from '@/hooks';

import Button from '@/components/button';
import Section from '@/components/section';
import Loading from '@/components/shared/loading';

const LazyTraining = React.lazy(() => import('@/components/home/lazytraining'));

export default function EducationView() {
  const t = useTypedTranslation();

  return (
    <Section>
      <div
        className={cn(
          'flex items-center justify-between border-4 bg-gradient-to-r',
          'from-secondary to-primary',
          'dark:from-secondarydark dark:to-primarydark dark:border-cyan dark:rounded-t-xl dark:border-2',
        )}
      >
        <span className='px-2'>{t.text('home.academic.title')}</span>
        <Button disabled>X</Button>
      </div>
      <div className='flex h-8 justify-center'>
        <div className='dark:from-cyan h-full w-1 bg-gradient-to-b from-white to-transparent dark:w-[2px]' />
        <div className='flex-grow' />
        <div className='dark:from-cyan h-full w-1 bg-gradient-to-b from-white to-transparent dark:w-[2px]' />
      </div>
      <Suspense fallback={<Loading />}>
        <LazyTraining />
      </Suspense>
      <div className='dark:border-b-cyan flex h-16 justify-center border-b-4 dark:border-b-2'>
        <div className='dark:from-cyan h-full w-1 bg-gradient-to-t from-white to-transparent dark:w-[2px]' />
        <div className='flex-grow' />
        <div className='dark:from-cyan h-full w-1 bg-gradient-to-t from-white to-transparent dark:w-[2px]' />
      </div>
    </Section>
  );
}

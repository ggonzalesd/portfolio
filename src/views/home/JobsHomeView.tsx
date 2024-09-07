import React, { Suspense } from 'react';
import cn from 'classnames';

import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import Button from '@/components/button';
import Loading from '@/components/shared/loading';

const LazyJobs = React.lazy(() => import('@/components/home/lazyjobs'));

export default function JobsHomeView() {
  const t = useTypedTranslation();

  return (
    <Section>
      <div className='dark:border-cyan mt-4 flex flex-col border-4 dark:rounded-t-xl dark:border-2'>
        <div
          className={cn(
            'flex w-full items-center justify-between bg-gradient-to-r',
            'from-secondary to-primary',
            'dark:from-secondarydark dark:to-primarydark dark:rounded-t-xl',
          )}
        >
          <span className='px-2'>{t.text('home.experience.title')}</span>
          <Button disabled>X</Button>
        </div>
        <div
          className={cn(
            'flex flex-col gap-4 p-2',
            'bg-zinc-300',
            'dark:to-primarydark dark:from-secondarydark dark:bg-gradient-to-br',
          )}
        >
          <Suspense fallback={<Loading />}>
            <LazyJobs />
          </Suspense>
        </div>
      </div>
    </Section>
  );
}

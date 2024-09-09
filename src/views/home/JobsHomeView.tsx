import React, { Suspense } from 'react';
import cn from 'classnames';

import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import Loading from '@/components/shared/loading';
import Window from '@/components/window';

const LazyJobs = React.lazy(() => import('@/components/home/lazyjobs'));

export default function JobsHomeView() {
  const t = useTypedTranslation();

  return (
    <Section>
      <Window title={t.text('home.experience.title')}>
        <div
          className={cn(
            'flex flex-col gap-4 p-2',
            'bg-zinc-300',
            'dark:bg-gradient-to-br dark:from-secondarydark dark:to-primarydark',
          )}
        >
          <Suspense fallback={<Loading />}>
            <LazyJobs />
          </Suspense>
        </div>
      </Window>
    </Section>
  );
}

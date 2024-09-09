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
            'flex flex-col gap-4 bg-gradient-to-br p-2',
            'from-zinc-300 to-zinc-200',

            'dark:from-secondarydark/20 dark:to-primarydark/20',
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

import React, { useEffect } from 'react';
import cn from 'classnames';
import { useTypedTranslation } from '@/hooks';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { useThemeStore } from '@/store';

interface Props {
  children?: React.ReactNode;
}

const queries = new URLSearchParams(window.location.search);

export default function AppLayout({ children }: Props) {
  const t = useTypedTranslation();
  const { dark } = useThemeStore();

  useEffect(() => {
    const lang = queries.get('lang') ?? 'en';
    t.change(lang);
    queries.set('lang', queries.get('lang') ?? 'en');
    history.pushState({}, '', `${window.location.pathname}?${queries}`);
  }, [dark]);

  return (
    <div
      className={cn(
        { ['dark']: dark },
        'flex min-h-screen flex-col justify-between bg-gradient-to-br pt-12',
        'from-secondary to-primary text-black',
        'dark:from-secondarydark dark:to-primarydark dark:text-white',
      )}
    >
      <Header />
      <main className='flex flex-grow flex-col gap-8'>{children}</main>
      <Footer />
    </div>
  );
}

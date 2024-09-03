import React, { useEffect } from 'react';
import { useTypedTranslation } from '@/hooks';

import Footer from '@/components/footer';
import Header from '@/components/header';

interface Props {
  children?: React.ReactNode;
}

const queries = new URLSearchParams(window.location.search);

export default function AppLayout({ children }: Props) {
  const t = useTypedTranslation();

  useEffect(() => {
    const lang = queries.get('lang') ?? 'en';
    t.change(lang);
    queries.set('lang', queries.get('lang') ?? 'en');
    history.pushState({}, '', `${window.location.pathname}?${queries}`);
  }, []);

  return (
    <div className='flex min-h-screen flex-col justify-between bg-gradient-to-br from-[#8af] to-[#fad] pt-12'>
      <Header />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}

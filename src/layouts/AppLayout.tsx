import Header from '@/components/header';
import { useTypedTranslation } from '@/hooks';
import React, { useEffect } from 'react';

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
    <div className='min-h-screen bg-gradient-to-br from-[#8af] to-[#fad] pt-12'>
      <Header />
      <main>{children}</main>
    </div>
  );
}

import Header from '@/components/header';
import React, { useEffect } from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  useEffect(() => {
    const queries = new URLSearchParams(window.location.search);
    // console.log(navigator.language);
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

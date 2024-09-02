import Header from '@/components/header';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#8af] to-[#f8a] pt-16'>
      <Header />
      <main>{children}</main>
    </div>
  );
}

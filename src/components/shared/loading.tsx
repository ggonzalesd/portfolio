import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import style from './loading.module.css';

const dotsStr = '...';

export default function Loading() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((value) => value + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='relative flex w-9/12 items-center gap-2 border-4 bg-gradient-to-br from-[#8af] to-[#fad] px-2'>
        <div className={style.Loading} />
        <AiOutlineLoading3Quarters className='animate-spin' />
        loading {`${dotsStr.slice(0, dots % 4)}`}
      </div>
    </div>
  );
}

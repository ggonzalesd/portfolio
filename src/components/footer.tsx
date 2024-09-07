import { useState } from 'react';
import cn from 'classnames';
import Button from './button';

import { IoCloseSharp } from 'react-icons/io5';
import { useTypedTranslation } from '@/hooks';

export default function Footer() {
  const t = useTypedTranslation();

  const [open, setOpen] = useState(true);

  return (
    <footer
      className={cn(
        'mt-4 flex flex-col border-4 bg-zinc-200',
        'dark:border-cyan dark:rounded-t-xl dark:border-2',
      )}
    >
      <div
        className={cn(
          'flex items-center justify-between bg-gradient-to-r',
          'from-secondary to-primary',
          'dark:from-primarydark dark:to-secondarydark dark:overflow-hidden dark:rounded-t-xl',
        )}
      >
        <span className='px-2'>{t.text('app.footer.title')}</span>
        <Button variant='gold' onClick={() => setOpen((value) => !value)}>
          <IoCloseSharp size={24} />
        </Button>
      </div>
      <section
        className={cn(
          'flex w-full origin-bottom flex-col py-4 transition-all duration-150',
          'bg-zinc-300',
          'dark:bg-secondarydark',
          open ? 'visible' : 'hidden',
        )}
      >
        <span className='mx-auto text-center'>Grober Gonzales - 2024</span>
      </section>
    </footer>
  );
}

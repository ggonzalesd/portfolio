import { useState } from 'react';
import cn from 'classnames';
import Button from './button';

import { IoCloseSharp } from 'react-icons/io5';

export default function Footer() {
  const [open, setOpen] = useState(true);

  return (
    <footer className='mt-4 flex flex-col border-4'>
      <div className='flex items-center justify-between bg-gradient-to-r from-[#8af] to-[#f8d]'>
        <span className='px-2'>Footer</span>
        <Button variant='old' onClick={() => setOpen((value) => !value)}>
          <IoCloseSharp size={24} />
        </Button>
      </div>
      <section
        className={cn(
          'flex w-full origin-bottom flex-col bg-zinc-300 py-4 transition-all duration-150',
          open ? 'visible' : 'hidden',
        )}
      >
        <span className='mx-auto text-center'>Grober Gonzales - 2024</span>
      </section>
    </footer>
  );
}

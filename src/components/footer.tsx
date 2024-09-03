import { useState } from 'react';
import cn from 'classnames';
import Button from './button';

import { IoCloseSharp } from 'react-icons/io5';

export default function Footer() {
  const [open, setOpen] = useState(true);

  return (
    <footer className=''>
      <div className='flex justify-end'>
        <Button
          variant='old'
          className='bg-red-600 hover:bg-red-500 active:bg-red-400'
          onClick={() => setOpen((value) => !value)}
        >
          <IoCloseSharp size={24} className='text-white' />
        </Button>
      </div>
      <section
        className={cn(
          'h-20 w-full bg-zinc-300 duration-150',
          open ? 'max-h-max' : 'max-h-0',
        )}
      ></section>
    </footer>
  );
}

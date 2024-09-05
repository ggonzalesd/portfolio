import { useState } from 'react';
import { IconType } from 'react-icons';

import IFramer from '../shared/iframer';
import Button, { buttonStyleGenerator } from '../button';

import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';

interface Props {
  Icon: IconType;
  value: string;
  display: string;
  action: 'COPY' | 'LINK' | 'EMBED';
}

export default function InfosTag({ Icon, display, value, action }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex items-center bg-zinc-300'>
      <Button variant='old'>
        <Icon size={24} />
      </Button>
      <span className='flex-grow px-2 text-blue-700'>{display}</span>
      {action === 'COPY' && (
        <Button
          variant='old'
          onClick={() => navigator.clipboard.writeText(value)}
        >
          <FaCopy size={24} />
        </Button>
      )}

      {action === 'LINK' && (
        <a
          href={value}
          target='_blank'
          className={buttonStyleGenerator({ variant: 'old' })}
        >
          <FaExternalLinkAlt size={24} />
        </a>
      )}

      {action === 'EMBED' && (
        <Button variant='old' onClick={() => setOpen(true)}>
          <GrView size={24} />
        </Button>
      )}
      {action === 'EMBED' && open && (
        <section className='fixed left-0 top-0 z-20 flex h-full w-full justify-center'>
          <IFramer
            redirect={true}
            download={true}
            frames={[{ display, value }]}
            setOpen={setOpen}
          />
        </section>
      )}
    </div>
  );
}

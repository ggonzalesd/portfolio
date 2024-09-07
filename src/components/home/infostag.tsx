import { useState } from 'react';
import { IconType } from 'react-icons';
import cn from 'classnames';

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
    <div
      className={cn(
        'flex items-center',
        'bg-zinc-300',
        'dark:bg-secondarydark dark:border-cyan dark:rounded-md dark:border-2',
      )}
    >
      <Button variant='old'>
        <Icon size={24} />
      </Button>
      <span className='flex-grow px-2 text-blue-700 dark:text-blue-400'>
        {display}
      </span>
      {action === 'COPY' && (
        <Button
          disabled={navigator.clipboard === undefined}
          variant='gold'
          onClick={() =>
            navigator.clipboard
              .writeText(value)
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.error(error);
              })
          }
        >
          <FaCopy size={24} />
        </Button>
      )}

      {action === 'LINK' && (
        <a
          href={value}
          target='_blank'
          className={buttonStyleGenerator({ variant: 'gold' })}
        >
          <FaExternalLinkAlt size={24} />
        </a>
      )}

      {action === 'EMBED' && (
        <Button variant='gold' onClick={() => setOpen(true)}>
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

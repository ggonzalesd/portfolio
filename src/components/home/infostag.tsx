import { IconType } from 'react-icons';
import cn from 'classnames';

import Button, { buttonStyleGenerator } from '../button';

import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
  Icon: IconType;
  value: string;
  display: string;
  action: 'COPY' | 'LINK' | 'EMBED';
}

export default function InfosTag({ Icon, display, value, action }: Props) {
  return (
    <div
      className={cn(
        'flex items-center',
        'bg-zinc-300',
        'dark:rounded-md dark:border-[1px] dark:border-cyan/50 dark:bg-secondarydark',
      )}
    >
      <div className='px-2 text-black dark:text-cyan'>
        <Icon size={24} />
      </div>
      <span className='flex-grow px-2 text-blue-700 dark:text-blue-400'>
        {display}
      </span>
      {action === 'COPY' && (
        <Button
          disabled={navigator.clipboard === undefined}
          variant='gold'
          onClick={
            () => navigator.clipboard.writeText(value)
            // .then((response) => {
            //   console.log(response);
            // })
            // .catch((error) => {
            //   console.error(error);
            // })
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
    </div>
  );
}

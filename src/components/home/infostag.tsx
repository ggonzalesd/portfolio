import Button, { buttonStyleGenerator } from '../button';
import { FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Props {
  Icon: IconType;
  value: string;
  display: string;
  action: 'COPY' | 'LINK';
}

export default function InfosTag({ Icon, display, value, action }: Props) {
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
    </div>
  );
}

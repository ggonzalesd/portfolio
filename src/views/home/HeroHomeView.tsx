import cn from 'classnames';
import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import Button, { buttonStyleGenerator } from '@/components/button';

import images from '@/assets/photos';
import styles from './Home.module.css';
import { MdEmail } from 'react-icons/md';
import { BiPhone } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaCopy } from 'react-icons/fa';

export default function HeroHomeView() {
  const t = useTypedTranslation();

  return (
    <Section className='grid grid-cols-1 gap-4 py-2 sm:grid-cols-2'>
      <div className='flex items-center justify-center'>
        <div
          className={cn(
            'z-[1] flex flex-col border-4 bg-zinc-300 shadow-md shadow-black/40',
            styles.Home_HeroImage,
          )}
        >
          <img
            src={images.profile}
            className='aspect-square h-auto w-80 object-cover object-center'
          />
          <span
            className={buttonStyleGenerator({
              variant: 'old',
              className: 'py-4 text-center text-3xl font-bold leading-8',
            })}
          >
            Grober Gonzales
          </span>
          <span className='px-4 py-2'>FullStack - Developer</span>
        </div>
      </div>
      <div className='z-[1] flex flex-col items-center justify-center sm:items-start'>
        <div className='px-6 sm:px-0'>
          <h2 className='text-center text-xl sm:text-start'>
            {t.text('home.hero.description.title')}
          </h2>
          <p className='text-xs leading-6 backdrop-blur-[1px]'>
            {t.text('home.hero.description.content')}
          </p>
        </div>
        <div className='my-2 flex flex-col gap-2'>
          <div className='flex items-center bg-zinc-300'>
            <Button variant='old'>
              <MdEmail size={24} />
            </Button>
            <span className='flex-grow px-2 text-blue-700'>
              grober_gonzales@hotmail.com
            </span>
            <Button variant='old'>
              <FaCopy size={24} />
            </Button>
          </div>
          <div className='flex items-center bg-zinc-300'>
            <Button variant='old'>
              <BiPhone size={24} />
            </Button>
            <span className='flex-grow text-nowrap px-2 text-blue-700'>
              +51 946 814 055
            </span>
            <Button variant='old'>
              <FaCopy size={24} />
            </Button>
          </div>
          <div className='flex items-center bg-zinc-300'>
            <Button variant='old'>
              <BsLinkedin size={24} />
            </Button>
            <span className='flex-grow text-nowrap px-2 text-blue-700'>
              gegonzalesd
            </span>
            <a
              href='https://linkedin.com/in/gegonzalesd'
              target='_blank'
              className={buttonStyleGenerator({ variant: 'old' })}
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
          <div className='flex items-center bg-zinc-300'>
            <Button variant='old'>
              <BsGithub size={24} />
            </Button>
            <span className='flex-grow text-nowrap px-2 text-blue-700'>
              ggonzalesd
            </span>
            <a
              href='https://github.com/ggonzalesd'
              target='_blank'
              className={buttonStyleGenerator({ variant: 'old' })}
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

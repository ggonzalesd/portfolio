import cn from 'classnames';
import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import Button, { buttonStyleGenerator } from '@/components/button';

import images from '@/assets/photos';
import styles from './Home.module.css';
import { MdEmail } from 'react-icons/md';
import { BiPhone } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function HeroHomeView() {
  const t = useTypedTranslation();

  return (
    <Section className='grid grid-cols-1 py-2 sm:grid-cols-2'>
      <div className='flex items-center justify-center'>
        <div
          className={cn(
            'flex flex-col border-4 bg-zinc-300 shadow-md shadow-black/40',
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
      <div>
        <div>
          <h2 className='text-xl'>{t.text('home.hero.description.title')}</h2>
          <p className='text-xs leading-6 backdrop-blur-[1px]'>
            {t.text('home.hero.description.content')}
          </p>
        </div>
        <div className='my-2 flex flex-col gap-2'>
          <div className='flex max-w-min items-center bg-zinc-300'>
            <Button variant='old'>
              <MdEmail size={24} />
            </Button>
            <span className='px-2 text-blue-700'>
              grober_gonzales@hotmail.com
            </span>
          </div>
          <div className='flex max-w-min items-center bg-zinc-300'>
            <Button variant='old'>
              <BiPhone size={24} />
            </Button>
            <span className='text-nowrap px-2 text-blue-700'>
              +51 946 814 055
            </span>
          </div>
          <div className='flex max-w-min items-center bg-zinc-300'>
            <Button variant='old'>
              <BsLinkedin size={24} />
            </Button>
            <span className='text-nowrap px-2 text-blue-700'>gegonzalesd</span>
          </div>
          <div className='flex max-w-min items-center bg-zinc-300'>
            <Button variant='old'>
              <BsGithub size={24} />
            </Button>
            <span className='text-nowrap px-2 text-blue-700'>ggonzalesd</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

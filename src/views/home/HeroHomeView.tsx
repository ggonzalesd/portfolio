import cn from 'classnames';
import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import Button, { buttonStyleGenerator } from '@/components/button';
import InfosTag from '@/components/home/infostag';

import { MdMail } from 'react-icons/md';
import { BiDownload, BiPhone } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';

import images from '@/assets/photos';
import styles from './Home.module.css';

import plane from '@/assets/decorations/palm.svg';
import GridDec from '@/components/shared/GridDec';
import { onDownload } from '@/lib/onDownload';

export default function HeroHomeView() {
  const t = useTypedTranslation();

  return (
    <Section
      before={
        <div className='relative mx-auto w-full max-w-screen-lg'>
          <div
            className='absolute right-0 top-96 h-96 w-96 bg-cover bg-center opacity-10 sm:top-0'
            style={{ backgroundImage: `url(${plane})` }}
          />
        </div>
      }
      after={
        <div className='relative mx-auto w-full max-w-screen-lg'>
          <GridDec className='absolute bottom-0 left-0' />
        </div>
      }
      className='grid grid-cols-1 gap-4 py-2 sm:grid-cols-2'
    >
      {/* Picture Section */}
      <div className='flex items-center justify-center'>
        <picture
          className={cn(
            'z-[1] flex flex-col border-4',
            'bg-zinc-300 shadow-md shadow-black/40',
            'dark:overflow-hidden dark:rounded-lg dark:border-[1px] dark:border-cyan/50 dark:bg-secondarydark dark:shadow-lg dark:shadow-cyan/20',
            styles.Home_HeroImage,
          )}
        >
          <img
            src={images.photo01}
            alt='Grober Erickson Gonzales De La Cruz'
            className='aspect-square h-auto w-80 object-cover object-center'
          />
          <span
            className={buttonStyleGenerator({
              variant: 'gold',
              className:
                'cursor-pointer select-none py-4 text-center text-3xl font-bold leading-8',
            })}
          >
            Grober Gonzales
          </span>
          <span className='px-4 py-2'>FullStack - Developer</span>
        </picture>
      </div>

      {/* Description Section */}
      <article className='z-[1] flex flex-col items-center justify-center gap-2 sm:items-start'>
        {/* Text */}
        <div className='py-6 sm:px-0'>
          <h1 className='mb-2 text-center text-xl sm:text-start'>
            {t.text('home.hero.description.title')}
          </h1>
          <p className='text-xs leading-6'>
            {t.text('home.hero.description.content')}
          </p>
          <p className='text-xs leading-6'>
            {t.text('home.hero.description.end-content')}
          </p>
        </div>

        {/* Download Curriculum */}
        <div className='mx-auto flex'>
          <Button
            variant='gold'
            className='flex items-center gap-2 underline'
            onClick={onDownload(
              import.meta.env.BASE_URL +
                '/download/fullstack-grober_gonzales.pdf',
              'Curriculum',
            )}
          >
            <span>{t.text('home.hero.description.cv.download')}</span>
            <BiDownload size={24} />
          </Button>
          <a
            href={
              import.meta.env.BASE_URL +
              '/download/fullstack-grober_gonzales.pdf'
            }
            target='_blank'
            className={buttonStyleGenerator({ variant: 'old' })}
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className='my-2 flex w-full flex-col gap-2'>
          {tags.map(({ icon, display, value }) => (
            <InfosTag key={value} Icon={icon} display={display} value={value} />
          ))}
        </div>

        {/* Social */}
        <div className='flex w-full justify-center gap-2'>
          {social.map(({ icon: Icon, value }) => (
            <a
              key={value}
              href={value}
              className={buttonStyleGenerator({
                variant: 'old',
                className: 'dark:rounded-md',
              })}
              target='_blank'
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </article>
    </Section>
  );
}

const social: { icon: IconType; value: string }[] = [
  {
    icon: BsLinkedin,
    value: 'https://linkedin.com/in/gegonzalesd',
  },
  {
    icon: BsGithub,
    value: 'https://github.com/ggonzalesd',
  },
];

const tags: {
  icon: IconType;
  display: string;
  value: string;
}[] = [
  {
    icon: MdMail,
    display: 'grober_gonzales@hotmail.com',
    value: 'grober_gonzales@hotmail.com',
  },
  {
    icon: BiPhone,
    display: '+51 946 814 055',
    value: '+51 946 814 055',
  },
];

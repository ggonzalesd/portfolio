import cn from 'classnames';
import { useTypedTranslation } from '@/hooks';

import Section from '@/components/section';
import { buttonStyleGenerator } from '@/components/button';
import InfosTag from '@/components/home/infostag';

import { MdMail } from 'react-icons/md';
import { BiPhone } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { FaFilePdf } from 'react-icons/fa';

import images from '@/assets/photos';
import styles from './Home.module.css';

export default function HeroHomeView() {
  const t = useTypedTranslation();

  return (
    <Section className='grid grid-cols-1 gap-4 py-2 sm:grid-cols-2'>
      <div className='flex items-center justify-center'>
        <picture
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
        </picture>
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
          {tags.map(({ icon, action, display, value }) => (
            <InfosTag
              key={value}
              Icon={icon}
              display={display}
              value={value}
              action={action}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

const tags: {
  icon: IconType;
  display: string;
  value: string;
  action: 'LINK' | 'COPY' | 'EMBED';
}[] = [
  {
    icon: MdMail,
    display: 'grober_gonzales@hotmail.com',
    value: 'grober_gonzales@hotmail.com',
    action: 'COPY',
  },
  {
    icon: BiPhone,
    display: '+51 946 814 055',
    value: '+51 946 814 055',
    action: 'COPY',
  },
  {
    icon: BsLinkedin,
    display: 'gegonzalesd',
    value: 'https://linkedin.com/in/gegonzalesd',
    action: 'LINK',
  },
  {
    icon: BsGithub,
    display: 'ggonzalesd',
    value: 'https://github.com/ggonzalesd',
    action: 'LINK',
  },
  {
    icon: FaFilePdf,
    display: 'Curriculum Vitae',
    value: import.meta.env.BASE_URL + '/download/fullstack-grober_gonzales.pdf',
    action: 'EMBED',
  },
];

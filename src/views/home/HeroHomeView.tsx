import cn from 'classnames';

import Section from '@/components/section';
import { buttonStyleGenerator } from '@/components/button';

import images from '@/assets/photos';

import styles from './Home.module.css';
import { useTypedTranslation } from '@/hooks';

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
        <h2 className='text-xl'>{t.text('home.hero.description.title')}</h2>
        <div>
          <p className='text-xs leading-6'>
            {t.text('home.hero.description.content')}
          </p>
        </div>
      </div>
    </Section>
  );
}

import Button from '@/components/button';
import Section from '@/components/section';

import skills from '@/assets/skills';
import styles from './Home.module.css';

export default function StackHomeView() {
  return (
    <Section className='mt-2'>
      <div className='border-4'>
        <div className='flex w-full items-center justify-between bg-gradient-to-r from-[#8af] to-[#f8d]'>
          <span className='px-2'>My Skills</span>
          <Button disabled>X</Button>
        </div>
        <div className='relative overflow-x-hidden whitespace-nowrap bg-zinc-300 py-4'>
          {[0, 1].map((i) => (
            <div key={i} className={styles.Home_SkillLogoSlide}>
              {skills.map(({ src, display }, index) => (
                <picture
                  key={index}
                  className='mx-4 inline-block rounded-md bg-white/0 p-1'
                >
                  <img
                    src={src}
                    alt={display}
                    className='mx-auto aspect-square h-[60px]'
                  />
                  <div className='flex w-full justify-center'>
                    <span>{display}</span>
                  </div>
                </picture>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

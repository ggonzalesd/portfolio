import cn from 'classnames';
import skills from '@/assets/skills';

import styles from './Skills.module.css';
import { useCallback, useState } from 'react';
import Button from '../button';

const tags = ['all', 'frontend', 'backend'];

export default function Skills() {
  const [tag, setTag] = useState('all');

  const filterCallback = useCallback(
    (currentTags: string[]) => {
      return tag === 'all' || currentTags.includes(tag);
    },
    [tag],
  );

  return (
    <div
      className={cn(
        'relative overflow-x-hidden whitespace-nowrap pb-4',
        'bg-zinc-300',
        'dark:bg-gradient-to-tr dark:from-primarydark dark:to-secondarydark',
      )}
    >
      <div className='mb-4 flex'>
        {tags.map((tagName) => (
          <Button
            key={tagName}
            variant={tag === tagName ? 'gold' : 'old'}
            onClick={() => setTag(tagName)}
          >
            {tagName.charAt(0).toUpperCase() + tagName.slice(1)}
          </Button>
        ))}
      </div>
      <div>
        {[0, 1].map((i) => (
          // className='flex flex-wrap justify-center'
          <div key={i} className={styles.Home_SkillLogoSlide}>
            {Object.values(skills)
              .filter(({ tags }) => filterCallback(tags))
              .map(({ src, display }, index) => (
                <picture
                  key={index}
                  className='mx-4 inline-block rounded-md bg-white/0 p-1'
                >
                  <img
                    src={src}
                    alt={`${display} logo`}
                    className='mx-auto aspect-square h-[60px]'
                  />
                  <div className='flex w-full justify-center'>
                    <span className='font-pixeloidsans'>{display}</span>
                  </div>
                </picture>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

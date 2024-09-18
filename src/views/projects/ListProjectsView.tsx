import Section from '@/components/section';

import ProjectCard from '@/components/projects/projectcard';

import { BsGithub } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { GrDeploy } from 'react-icons/gr';

import { LangKey } from '@/locale/en';
import { useTypedTranslation } from '@/hooks';

import springboot from '@/assets/thumbnails/spring-boot.png';
import diffusionflower from '@/assets/thumbnails/diffusion-flower.png';
import cyberpunk from '@/assets/thumbnails/cyberpunk-icons.png';
import simpleui from '@/assets/thumbnails/SimpleUI.png';

import skills from '@/assets/skills';

export default function ListProjectsView() {
  const queries = new URLSearchParams(window.location.search);
  const projectId = queries.get('id');
  const t = useTypedTranslation();

  // console.log(queries.get('id'));

  return (
    <Section>
      <div className='my-8 grid w-full grid-cols-1 gap-8 px-2 sm:grid-cols-2 sm:px-0'>
        {projectId && <div className='h-full bg-red-50'>{projectId}</div>}
        {!projectId &&
          projects.map((project) => (
            <div
              key={project.name}
              className='flex h-full w-full items-center justify-center'
            >
              <ProjectCard
                title={project.title}
                src={project.src}
                name={t.text(project.name)}
                texts={project.texts.map((text) => t.text(text))}
                tags={project.tags}
                releases={project.releases}
              />
            </div>
          ))}
      </div>
    </Section>
  );
}

const projects: {
  title: 'Frontend' | 'Backend' | 'Data Science' | 'Other';
  src: string;
  name: LangKey;
  texts: LangKey[];
  tags: { src: string; display: string }[];
  releases: { src: string; Icon: IconType; display: string }[];
}[] = [
  {
    title: 'Frontend',
    src: simpleui,
    name: 'project.p004-simpleui.name',
    tags: [skills.typescript, skills.react, skills.zustand, skills.tailwind],
    texts: ['project.p004-simpleui.text.01', 'project.p004-simpleui.text.02'],
    releases: [
      {
        src: 'https://ggonzalesd.github.io/SimpleUI',
        display: 'Website',
        Icon: GrDeploy,
      },
      {
        src: 'https://github.com/ggonzalesd/SimpleUI',
        display: 'Github',
        Icon: BsGithub,
      },
    ],
  },
  {
    title: 'Backend',
    src: springboot,
    name: 'project.p001-unitableapi.name',
    tags: [skills.springboot, skills.postgresql],
    texts: [
      'project.p001-unitableapi.text.01',
      'project.p001-unitableapi.text.02',
    ],
    releases: [
      {
        src: 'https://github.com/ggonzalesd/UniTable',
        display: 'Github',
        Icon: BsGithub,
      },
    ],
  },
  {
    title: 'Data Science',
    src: diffusionflower,
    name: 'project.p002-diffusionflower.name',
    tags: [skills.python, skills.torch, skills.jupyter],
    texts: [
      'project.p002-diffusionflower.text.01',
      'project.p002-diffusionflower.text.02',
    ],
    releases: [
      {
        src: 'https://github.com/ggonzalesd/diffusion-flowers',
        display: 'Github',
        Icon: BsGithub,
      },
    ],
  },
  {
    title: 'Other',
    src: cyberpunk,
    name: 'project.p003-cyberpunkicon.name',
    tags: [skills.vscode, skills.npm, skills.nodejs],
    texts: [
      'project.p003-cyberpunkicon.text.01',
      'project.p003-cyberpunkicon.text.02',
    ],
    releases: [
      {
        src: 'https://github.com/ggonzalesd/cyberpunk-vscode-icon',
        display: 'Github',
        Icon: BsGithub,
      },
    ],
  },
];

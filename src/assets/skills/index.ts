import css3 from './css3.svg';
import html5 from './html5.svg';
import java from './java.svg';
import javascript from './javascript.svg';
import nodejs from './nodejs.svg';
import npm from './npm.svg';
import postgresql from './postgresql.svg';
import python from './python.svg';
import react from './react.svg';
import redux from './redux.svg';
import typescript from './typescript.svg';
import emailjs from './emailjs.png';
import mui from './mui.png';
import tailwind from './tailwind.svg';
import nestjs from './nestjs.svg';
import i18n from './i18next.png';
import express from './express.png';
import sequelize from './sequelize.png';
import typeorm from './typeorm.png';
import springboot from './spring-boot.png';
import sqlite from './sqlite.png';
import zustand from './zustand.ico';
import linux from './linux.svg';
import docker from './docker.svg';
import git from './git.svg';
import torch from './torch.png';
import jupyter from './jupyter-notebook.png';
import vscode from './vscode.png';
import cpp from './cpp.png';

const data = {
  html: { src: html5, display: 'HTML', tags: ['frontend'] },
  css: { src: css3, display: 'CSS', tags: ['frontend'] },
  javascript: {
    src: javascript,
    display: 'JavasScript',
    tags: ['frontend', 'backend'],
  },

  nodejs: { src: nodejs, display: 'NodeJS', tags: ['frontend', 'backend'] },
  npm: { src: npm, display: 'npm', tags: ['frontend', 'backend'] },
  typescript: {
    src: typescript,
    display: 'Typescript',
    tags: ['frontend', 'backend'],
  },
  react: { src: react, display: 'React', tags: ['frontend'] },
  tailwind: { src: tailwind, display: 'Tailwind', tags: ['frontend'] },
  i18n: { src: i18n, display: 'i18next', tags: ['frontend', 'other'] },
  redux: { src: redux, display: 'Redux', tags: ['frontend'] },
  zustand: { src: zustand, display: 'Zustand', tags: ['frontend'] },
  express: { src: express, display: 'ExpressJs', tags: ['backend'] },
  nestjs: { src: nestjs, display: 'NestJs', tags: ['backend'] },
  emailjs: { src: emailjs, display: 'Emailjs', tags: ['frontend', 'other'] },

  mui: { src: mui, display: 'Mui', tags: ['frontend', 'other'] },

  postgresql: { src: postgresql, display: 'PostgreSQL', tags: ['backend'] },
  sequelize: { src: sequelize, display: 'Sequelize', tags: ['backend'] },
  sqlite: { src: sqlite, display: 'SQLite', tags: ['backend'] },
  typeorm: { src: typeorm, display: 'TypeORM', tags: ['backend'] },
  java: { src: java, display: 'Java', tags: ['backend'] },
  springboot: { src: springboot, display: 'Spring Boot', tags: ['backend'] },
  python: { src: python, display: 'Python', tags: ['other'] },
  torch: { src: torch, display: 'PyTorch', tags: ['other'] },
  jupyter: { src: jupyter, display: 'Jupyter', tags: ['other'] },

  vscode: { src: vscode, display: 'Vscode', tags: ['other'] },
  linux: { src: linux, display: 'Linux', tags: ['other'] },
  docker: { src: docker, display: 'Docker', tags: ['other'] },
  git: { src: git, display: 'Git', tags: ['other'] },
  cpp: { src: cpp, display: 'C++', tags: ['other'] },
};

export default data;

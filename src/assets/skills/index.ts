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

export default [
  { src: css3, display: 'CSS' },
  { src: html5, display: 'HTML' },
  { src: java, display: 'Java' },
  { src: javascript, display: 'JavasScript' },
  { src: nodejs, display: 'NodeJS' },
  { src: npm, display: 'npm' },
  { src: postgresql, display: 'PostgreSQL' },
  { src: python, display: 'Python' },
  { src: react, display: 'React' },
  { src: redux, display: 'Redux' },
  { src: typescript, display: 'Typescript' },
] as {
  src: string;
  display: string;
  tags?: string[];
}[];

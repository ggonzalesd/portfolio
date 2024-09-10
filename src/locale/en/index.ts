import appLang from './app.lang';
import homeLang from './home.lang';
import projectLang from './project.lang';

const enLang = {
  ...appLang,
  ...homeLang,
  ...projectLang,
};

export type LangKey = keyof typeof enLang;

export default enLang;

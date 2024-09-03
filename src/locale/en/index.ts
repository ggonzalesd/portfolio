import appLang from './app.lang';
import homeLang from './home.lang';

const enLang = {
  ...appLang,
  ...homeLang,
};

export type LangKey = keyof typeof enLang;

export default enLang;

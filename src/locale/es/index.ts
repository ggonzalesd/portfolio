import enLang from '@/locale/en';

import esAppLang from './app.lang';
import esHomeLang from './home.lang';
import esProjectLang from './project.lang';

const esLang: typeof enLang = {
  ...esAppLang,
  ...esHomeLang,
  ...esProjectLang,
};

export default esLang;

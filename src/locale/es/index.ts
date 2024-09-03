import enLang from '@/locale/en';

import esAppLang from './app.lang';
import esHomeLang from './home.lang';

const esLang: typeof enLang = {
  ...esAppLang,
  ...esHomeLang,
};

export default esLang;

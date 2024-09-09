import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLang from './en';
import esLang from './es';

const resources = {
  en: {
    translation: enLang,
  },
  es: {
    translation: esLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false,
  },
  debug: import.meta.env.DEV,
  fallbackLng: 'es',
});

export const languagesList = Object.keys(resources);
export type LanguagesEnum = keyof typeof resources;
export default i18n;

import { useTranslation } from 'react-i18next';
import { LanguagesEnum, languagesList } from '@/locale';
import { LangKey } from '@/locale/en';

export const useTypedTranslation = () => {
  const { t, i18n } = useTranslation();
  return {
    text: (key: LangKey | LangKey[]) => t(key),
    change: (lang: LanguagesEnum | string) => {
      const l = languagesList.find((l) => l === lang);

      i18n.changeLanguage(l ?? 'en');
    },
    lang: i18n.language as LanguagesEnum,
    langs: i18n.languages as LanguagesEnum[],
  };
};

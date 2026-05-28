import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import amCommon from '@/locales/am/common.json'
import enCommon from '@/locales/en/common.json'
import ruCommon from '@/locales/ru/common.json'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      ru: { common: ruCommon },
      am: { common: amCommon },
    },
    defaultNS: 'common',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'am'],
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

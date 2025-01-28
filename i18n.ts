import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '@/locales/es.json';

void i18n.use(initReactI18next).init({
  resources: {
    es: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      translation: es
    }
  },
  lng: "es", 
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
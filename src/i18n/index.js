import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from './locales/en';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: false,
		initImmediate: false,
		ns: ['sims-translation'],
		defaultNS: 'sims-translation',
		react: {
			useSuspense: false,
			wait: true
		},
		resources: {
			en: { 'sims-translation': english }
		},
		interpolation: {
			escapeValue: false
		}
	});

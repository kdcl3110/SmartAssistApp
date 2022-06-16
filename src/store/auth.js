import stringsoflanguages from '../containers/language/language';

export default {
  currentUser: {},
  isRegister: false,
  isAuthentificated: false,

  language: {
    name: stringsoflanguages.getInterfaceLanguage() === 'fr-FR' ? 'francais' : 'english',
    lang: stringsoflanguages.getInterfaceLanguage() === 'fr-FR' ? 'fr' : 'en',
    id: 1,
  },
};

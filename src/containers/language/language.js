import LocalizedStrings from 'react-native-localization';
import language from '../../components/home/i18n';
import chat from '../chat/i18n';
import confirmation from '../confirmation/i18n';
import auth from '../auth/i18n';

const strings = new LocalizedStrings({
  fr: {
    ...language.fr,
    ...chat.fr,
    ...confirmation.fr,
    ...auth.fr,
  },
  en: {
    ...language.en,
    ...chat.en,
    ...confirmation.en,
    ...auth.en,
  },
});

export default strings;

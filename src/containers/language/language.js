import LocalizedStrings from 'react-native-localization';
import language from '../../components/home/i18n';
import chat from '../chat/i18n';
import confirmation from '../confirmation/i18n';

const strings = new LocalizedStrings({
  fr: {
    ...language.fr,
    ...chat.fr,
    ...confirmation.fr,
  },
  en: {
    ...language.en,
    ...chat.en,
    ...confirmation.en,
  },
});

export default strings;

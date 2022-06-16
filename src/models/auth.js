import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../lib/api';
import HandleErrorMessage from '../lib/format-error-messages';
import initialState from '../store/auth';
import { errorMessages, successMessages } from '../constants/messages';
import stringsoflanguages from '../containers/language/language';
import * as Toast from '../components/UI/Toast';

export default {
  namespace: 'auth',

  /**
   *  Initial state
   */
  state: initialState,

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    async setLanguage(data, rootState) {
      console.log(rootState.auth.language.lang);
      stringsoflanguages.setLanguage(rootState.auth.language.lang);
    },
  }),

  /**
   * Reducers
   */
  reducers: {
    replaceLanguage(state, payload) {
      return {
        ...state,
        language: payload,
      };
    },
  },
};

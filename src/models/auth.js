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

    async login(data) {
      try {
        const response = await Api.post('signin', data);
        console.log(response.data);
        // await AsyncStorage.setItem('@Auth:token', response['data']['token']);
        // dispatch.auth.replaceCurrentUser(response.data.user);
        // dispatch.auth.replaceIsAuthentificated(true);
      } catch (error) {
        Toast.showError(error?.message);
        // console.log(error);
      }
    },

    async register(data) {
      try {
        const response = await Api.post('register', data);
        console.log(response.data);
        // await AsyncStorage.setItem('@Auth:token', response['data']['token']);
        // dispatch.auth.replaceCurrentUser(response.data.user);
        // dispatch.auth.replaceIsAuthentificated(true);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  }),

  /**
   * Reducers
   */
  reducers: {
    /**
     * Save form data
     * @param {obj} state
     * @param {obj} payload
     */
    replaceCurrentUser(state, payload) {
      return {
        ...state,
        currentUser: payload,
      };
    },
    /**
     * Save form data
     * @param {obj} state
     * @param {obj} payload
     */ replaceIsAuthentificated(state, payload) {
      return {
        ...state,
        isAuthentificated: payload,
      };
    },
    replaceLanguage(state, payload) {
      return {
        ...state,
        language: payload,
      };
    },
  },
};

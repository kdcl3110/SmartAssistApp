import moment from 'moment';
import Api from '../lib/api';
import HandleErrorMessage from '../lib/format-error-messages';
import initialState from '../store/printFiche';
import Config from '../constants/config';
import { getFeaturedImageUrl } from '../lib/images';
import { ucfirst, stripHtml } from '../lib/string';
import { errorMessages, successMessages } from '../constants/messages';
import pagination from '../lib/pagination';

export default {
  namespace: 'printFiche',

  /**
   *  Initial state
   */
  state: initialState,

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({
    /**
     * Get a list from the API
     * @param {obj} rootState
     * @returns {Promise}
     */
    async printPdf(id) {
      try {
        const response = await Api.get(`printPDF/${id}`);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async createEtatCivil(data) {
        console.log(data);
      try {
        const response = await Api.post('etatcivil', data);
        console.log(response.data);
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
     * Replace list in store
     * @param {obj} state
     * @param {obj} payload
     */
    replace(state, payload) {
      let newList = null;
      const { data, headers, page } = payload;

      // Loop data array, saving items in a usable format
      if (data && typeof data === 'object') {
        newList = data.map((item) => transform(item));
      }

      // Create our paginated and flat lists
      const listPaginated =
        page === 1 ? { [page]: newList } : { ...state.listPaginated, [page]: newList };
      const listFlat =
        Object.keys(listPaginated)
          .map((k) => listPaginated[k])
          .flat() || [];

      return newList
        ? {
            ...state,
            listPaginated,
            listFlat,
            lastSync:
              page === 1
                ? { [page]: moment().format() }
                : { ...state.lastSync, [page]: moment().format() },
            meta: {
              page,
              lastPage: parseInt(headers['x-wp-totalpages'], 10) || null,
              total: parseInt(headers['x-wp-total'], 10) || null,
            },
            pagination: pagination(headers['x-wp-totalpages'], '/articles/'),
          }
        : initialState;
    },

    replacelocalMessages(state, payload) {
      return {
        ...state,
        localMessage: payload,
      };
    },

    replaceResponseUser(state, payload) {
      return {
        ...state,
        responseUser: payload,
      };
    },
  },
};

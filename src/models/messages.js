import moment from 'moment';
import Api from '../lib/api';
import HandleErrorMessage from '../lib/format-error-messages';
import initialState from '../store/messages';
import Config from '../constants/config';
import { getFeaturedImageUrl } from '../lib/images';
import { ucfirst, stripHtml } from '../lib/string';
import { errorMessages, successMessages } from '../constants/messages';
import pagination from '../lib/pagination';

export default {
  namespace: 'messages',

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
    async fetchList({ forceSync = false, page = 1 } = {}, rootState) {
      const { articles = {} } = rootState;
      const { lastSync = {}, meta = {} } = articles;
      const { lastPage } = meta;

      // Only sync when it's been 5mins since last sync
      if (lastSync[page]) {
        if (!forceSync && moment().isBefore(moment(lastSync[page]).add(5, 'minutes'))) {
          return true;
        }
      }

      // We've reached the end of the list
      if (page && lastPage && page > lastPage) {
        throw HandleErrorMessage({ message: `Page ${page} does not exist` });
      }

      try {
        const response = await Api.get(`/v2/posts?per_page=4&page=${page}&orderby=modified&_embed`);
        const { data, headers } = response;

        return !data || data.length < 1 ? true : dispatch.articles.replace({ data, headers, page });
      } catch (error) {
        throw HandleErrorMessage(error);
      }
    },

    /**
     * Save date to redux store
     * @param {obj} data
     * @returns {Promise[obj]}
     */
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

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

    async generateFiche(data) {
      try {
        const response = await Api.post('scrape', data);
        console.log(response.data);
        dispatch.printFiche.replaceLink(response.data.fiche);
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

    async createFiliation(data) {
      try {
        const response = await Api.post('filiation', data);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async createPayment(data) {
      try {
        const response = await Api.post('infospaiement', data);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async createDiplome(data) {
      try {
        const response = await Api.post('diplome', data);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async createDetail(data) {
      try {
        const response = await Api.post('filiere', data);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    },

    async createDataStudent(data) {
      try {
        const response = await Api.post('datastudents', data);
        console.log(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    }

    // asunc create
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
    replaceLink(state, payload) {
      return {
        ...state,
        link: payload,
      };
    },
  },
};

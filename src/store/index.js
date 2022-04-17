import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    list: [],
  },

  mutations: {
    addListItems(state, payload) {
      state.list = payload
    },

    deleteBooks(state, payload) {
      let result = state.list.findIndex(function(item) {
        if (item.id === payload) {
          return true
        }
      });
      state.list.splice(result, 1)
    },
  },
  actions: {
  async getAddListItems({ commit }) {
      const response = await axios.get('https://gutendex.com/books');
      commit('addListItems', response.data.results);
    }
  },
})



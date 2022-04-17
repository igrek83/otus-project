import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    menu: [
      {
        name: 'Главная',
        path: '/'
      },
      {
        name: 'Список авторов',
        path: '/authors'
      },
      {
        name: 'Список книг',
        path: '/books'
      },
      {
        name: 'Поиск',
        path: '/search'
      },
      {
        name: 'Добавить книгу/автора',
        path: '/form'
      },
    ],
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

    addBooks(state, obj) {
      state.list.push(obj)
    },
  },
  actions: {
  async getAddListItems({ commit }) {
      const response = await axios.get('https://gutendex.com/books');
      commit('addListItems', response.data.results);
    }
  },
})



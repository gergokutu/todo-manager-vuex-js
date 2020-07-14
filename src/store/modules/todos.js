import axios from 'axios';
// https://jsonplaceholder.typicode.com/todos

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    commit('setTodos', response.data)
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
};

export default {
  // ES6 > state: state...
  state,
  getters,
  actions,
  mutations
}


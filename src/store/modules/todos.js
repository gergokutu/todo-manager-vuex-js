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
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );

    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );

    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    // Do not need to save the response in a variable
    // Just send the delete request to the db
    await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    commit('removeTodo', id);
  },
  async filterTodos({ commit }, event) {
    const limit = event.target[event.target.options.selectedIndex].value;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

    commit('updateTodoMut', response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodoMut: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo)
    }
  }
};

export default {
  // ES6 > state: state...
  state,
  getters,
  actions,
  mutations
};


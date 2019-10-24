import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || []).map(task => {
      // if (task.status === 'active') {
      //   const status = (+new Date() + 864 * 10e5) > +new Date(task.date) ? 'outdate' : 'active';
      //   task.status = status;
      // }
      // task.status = 'active'
      return task;
    })
  },

  getters: {
    tasks: state => state.tasks,
    taskById: state => id => state.tasks.find(task => task.id === id),
  },

  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    completeTask(state, id) {
      const idx = state.tasks.findIndex(task => task.id === +id);
      state.tasks[idx].status = 'complete';
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    updateTask(state, { id, title, date, tags, description }) {
      const idx = state.tasks.findIndex(task => task.id === id)
      const status = new Date() > new Date(date) ? 'outdate' : 'active';

      state.tasks[idx] = { id, title, date, tags, description, status };
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
})


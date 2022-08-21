import { createStore } from 'vuex';

export default createStore({
  state: {
    name: '',
    job: ''
  },

  mutations: {
    SET_NAME(state, param) {
      state.name = param;
    },
    SET_JOB(state, param) {
      state.job = param;
    },
  },

  actions: {
    setNameAndJob({ commit }) {
      commit('SET_NAME', '프뚜');
      commit('SET_JOB', '프로그래머');
    }
  }
});

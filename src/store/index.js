import Vue from 'vue'
import Vuex from 'vuex'

import { auth, db } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    tasks: [],
    task: {nombre: '', id: ''}
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setTasks(state, payload) {
      state.tasks = payload;
    },
    setTask(state, payload) {
      state.task = payload;
    },
    setDeleteTask(state, payload) {
      state.tasks = state.tasks.filter(item => item.id !== payload);
    }
  },
  actions: {
    createUser({commit}, request) {
      auth.createUserWithEmailAndPassword(request.email, request.password)
      .then(response => {
        const userRegistered = {
          email: response.user.email,
          uid: response.user.uid
        }

        db.collection(response.user.uid).add({
          name: 'example task'
        }).then(res => {
          commit('setUser', userRegistered);
          router.push('/');
        }).catch(error => {
          console.log(error);
        });

      }).catch(error => {
        console.log(error);
        commit('setError', error);
      });
    },
    loginUser({commit}, user) {
      auth.signInWithEmailAndPassword(user.email, user.password)
      .then(response => {
        const authUser = {
          email: response.user.email,
          uid: response.user.uid
        }

        commit('setUser', authUser);
        router.push('/');
      }).catch(error => {
        commit('setError', error);
      });
    },
    logout({commit}) {
      auth.signOut().then(() => {
        router.push('/login');
      });
    },
    detectUser({commit}, user) {
      commit('setUser', user);
    },
    getTasks({commit, state}) {
      const tasks = [];
      db.collection(state.user.uid).get().then(response => {
        response.forEach(item => {
          let task = item.data();
          task.id = item.id;
          tasks.push(task);
        });

        commit('setTasks', tasks);
      })
    },
    getTask({commit, state}, id) {
      db.collection(state.user.uid).doc(id).get()
      .then(response => {
        let task = response.data();
        task.id = response.id;

        commit('setTask', task);
      }).catch(error => {
        console.log(error);
      });
    },
    editTask({commit, state}, task) {
      db.collection(state.user.uid).doc(task.id).update({
        name: task.name
      }).then(() => {
        router.push({name: 'Home'});
      }).catch(error => console.log(error));
    },
    addTask({commit, state}, taskName) {
      db.collection(state.user.uid).add({
        name: taskName
      }).then(response => {
        router.push({name: 'Home'});
      }).catch(error => console.log(error));
    },
    deleteTask({commit, state}, id) {
      db.collection(state.user.uid).doc(id).delete()
      .then(() => {
        commit('setDeleteTask', id);
      }).catch(error => console.log(error));
    }
  },
  getters: {
    existUser(state) {
      if (state.user === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {
  }
})

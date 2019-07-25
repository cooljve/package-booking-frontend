import axios from "axios";

const baseUrl = 'http://localhost:8080';
const packages = {
  state: {
    packages: [],
  },
  getters: {
    packagesList: state => {
      return state.packages;
    }
  },
  mutations: {
    loadPackage(state, packs) {
      state.packages = packs;
    },
  },
  actions: {
    getPackages({commit}) {
      axios.get(`${baseUrl}/manage/packages`)
        .then(res => {
          commit('loadPackge', res.data);
        }).catch(err => {
        console.log(err);
      });
    },
    addPackages({dispatch, commit}, item) {
      axios.post(`${baseUrl}/manage/packages`, item)
        .then(res => {
          dispatch('getTodos');
        }).catch(err => {
        console.log(err);
      });
    },
    getNotTakePackage({commit}) {
      axios.get(`${baseUrl}/manage/packages?status=notTake`)
        .then(res => {
          commit('loadPackge', res.data);
        }).catch(err => {
        console.log(err);
      });
    },
    getTakePackage({commit}) {
      axios.get(`${baseUrl}/manage/packages?status=take`)
        .then(res => {
          commit('loadPackge', res.data);
        }).catch(err => {
        console.log(err);
      });
    },
    getBookedPackage({commit}) {
      axios.get(`${baseUrl}/manage/packages?status=booked`)
        .then(res => {
          commit('loadPackge', res.data);
        }).catch(err => {
        console.log(err);
      });
    },
    updatePackage({dispatch, commit}, item) {
      axios.put(`${baseUrl}/manage/packages/${item.id}`, item)
        .then(res => {
          dispatch('loadPackge');
        }).catch(err => {
      });
    },
    patchPackage({dispatch, commit}, bookOrder) {
      axios.patch(`${baseUrl}/manage/packages/${bookOrder.orderNumber}`, bookOrder)
        .then(res => {
          dispatch('loadPackge');
        }).catch(err => {
      });
    },
  }
};

export default packages;

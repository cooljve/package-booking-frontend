import axios from "axios";

const baseUrl = 'http://localhost:8080';

const actions = {
  getPackages({commit}) {
    axios.get(`${baseUrl}/manage/packages`)
      .then(res => {
        commit('loadPackage', res.data);
      }).catch(err => {
      console.log(err);
    });
  },
  addPackages({dispatch, commit}, item) {
    axios.post(`${baseUrl}/manage/packages`, item)
      .then(res => {
        dispatch('getPackages');
      }).catch(err => {
      alert(err.response.data);
    });
  },
  getNotTakePackage({commit}) {
    axios.get(`${baseUrl}/manage/packages?status=notTake`)
      .then(res => {
        commit('loadPackage', res.data);
      }).catch(err => {
      console.log(err);
    });
  },
  getTakePackage({commit}) {
    axios.get(`${baseUrl}/manage/packages?status=take`)
      .then(res => {
        commit('loadPackage', res.data);
      }).catch(err => {
      console.log(err);
    });
  },
  getBookedPackage({commit}) {
    axios.get(`${baseUrl}/manage/packages?status=booked`)
      .then(res => {
        commit('loadPackage', res.data);
      }).catch(err => {
      console.log(err);
    });
  },
  updatePackage({dispatch, commit}, item) {
    axios.put(`${baseUrl}/manage/packages/${item.orderId}`, item)
      .then(res => {
        dispatch('getPackages');
      }).catch(err => {
    });
  },
  patchPackage({dispatch, commit}, bookOrder) {
    axios.patch(`${baseUrl}/manage/packages/${bookOrder.orderNumber}`, bookOrder.bookDate)
      .then(res => {
        alert("预约成功");
        dispatch('getPackages');
      }).catch(err => {
      alert(err.response.data);
    });
  },
};
export default actions;

import Vue from 'vue'
import Vuex from 'vuex'
import packages from '../store/modulePackage'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    packages,
  }
});

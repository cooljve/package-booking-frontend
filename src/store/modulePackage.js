import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


const packages = {
  state: {
    packages: [],
  },
  getters,
  mutations,
  actions,
};

export default packages;

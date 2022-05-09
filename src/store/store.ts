import { createStore } from "vuex";
import HomeStore from "./HomeStore/HomeStore";

const store = createStore({
  state: {
    isMenu: false,
  },
  modules: {
    HomeStore,
  },
});

export default store;

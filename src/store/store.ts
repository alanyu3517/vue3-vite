import { createStore } from "vuex";
import HomeStore from "./HomeStore/HomeStore";

const store = createStore({
  modules: {
    HomeStore,
  },
});

export default store;

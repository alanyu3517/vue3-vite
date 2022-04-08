const HomeStore = {
  state: () => ({
    homeList: [],
  }),
  mutations: {
    setHomeList(state: { homeList: any; }, payload: any) {
      state.homeList = payload;
    },
  },
};

export default HomeStore;

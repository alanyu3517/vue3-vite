import { createApp } from "vue";
import App from "./App.vue";

import router from './router/router';
import store from './store/store';

const Apps = createApp(App);

Apps.use(router)
Apps.use(store)

Apps.mount("#app");

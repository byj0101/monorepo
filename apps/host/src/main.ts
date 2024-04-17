import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRedux } from "./store/storePlugin";
import { store } from "./store";

createApp(App).use(createRedux(store)).mount("#app");

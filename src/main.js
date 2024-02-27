import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Web Font
import "./assets/fonts/ArbFONTS-cocon-next-arabic.ttf";
import "./assets/fonts/arnamu.ttf";
import "./assets/fonts/BalooBhaijaan2-Regular.ttf";
import "./assets/fonts/CoconNextArabic-Bold.ttf";
// import "./assets/css/bootstrap.min.css.map";
// Swiper Config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/assets/css/style.css";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");

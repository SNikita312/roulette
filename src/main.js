import Vue from "vue";
import App from "./App.vue";
import "./assets/style/style-ru.sass";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

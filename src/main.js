import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// register the plugin on vue
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  className: "v-application",
  iconPack: "fontawesome",
  duration: 3000
});
// options to the toast
let options = {
  type: "error",
  icon: "exclamation-circle"
};

// register the toast with the custom message
Vue.toasted.register(
  "error",
  payload => {
    // if there is no message passed show default message
    if (!payload.message) {
      return "Uups.. Terjadi Kesalahan..";
    }

    // if there is a message show it with the message
    return payload.message;
  },
  options
);
Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    indexDataTable(datatable, item, key = "id") {
      return (
        datatable.data
          .map(function(x) {
            return x[key];
          })
          .indexOf(item[key]) + datatable.from
      );
    }
  }
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

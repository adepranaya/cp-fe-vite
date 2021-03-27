<template>
  <component :is="layout" v-bind="layoutProps">
    <router-view :layout.sync="layout" :layoutProps.sync="layoutProps" />
  </component>
</template>

<script>
import axios from "@/axios";
import NProgress from "nprogress";

export default {
  name: "App",
  data() {
    return {
      layout: "div",
      layoutProps: {}
    };
  },
  created() {
    axios.interceptors.request.use(
      config => {
        // trigger 'loading=true' event here
        NProgress.start();
        this.$store.commit("SET_LOADING", true);
        return config;
      },
      error => {
        // trigger 'loading=false' event here
        this.$store.commit("SET_LOADING", false);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      response => {
        // trigger 'loading=false' event here
        this.$store.commit("SET_LOADING", false);
        return response;
      },
      error => {
        if (
          error.status === 401 &&
          error.config &&
          !error.config.__isRetryRequest
        ) {
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["Authorization"];
        }
        // trigger 'loading=false' event here
        this.$store.commit("SET_LOADING", false);
        return Promise.reject(error);
      }
    );
  }
};
</script>

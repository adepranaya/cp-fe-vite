<template>
  <v-app id="app" class="grey lighten-4 bg-ut fill-height">
    <v-main>
      <v-container class="pa-5">
        <h5 class="text-h4 font-weight-bold" v-if="title">{{ title }}</h5>
        <v-breadcrumbs
          v-if="breadcrumbItems"
          :items="breadcrumbItems"
          class="ml-0 pl-0"
        >
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AdminLayout",

  props: ["title", "breadcrumbItems"],
  data: () => ({
    dialog: false,
    drawer: null
  }),
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = "Hello World" + (this.title ? " | " + this.title : "");
      }
    }
  }
};
</script>

<style scoped>
#app {
  background-image: 
  /* url("../assets/img/texture-ut-o15.png"); */ url("../assets/img/ornament-from-ut.png"),
    url("../assets/img/symphony.png");
  /* background-size: 100% 70%; */
  background-attachment: fixed, initial;
  background-repeat: no-repeat, repeat;
  background-position-y: bottom;
  background-color: #f3f3f7;
}
</style>

<style>
table th {
  border: 0.5px solid #eee;
}
table td {
  border: 0.5px solid #eee;
}
</style>

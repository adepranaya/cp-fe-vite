<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AuthLayout",

  data: () => ({
    //
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

<style>
.bg-ornament {
  background-image: url("../assets/img/ornament.png");
  background-size: cover;
}
@media (min-width: 768px) {
  .side-decor {
    background-image: url("../assets/img/rect_blue.svg");
    background-size: 1.5em;
    background-position-y: 50%;
  }
}
</style>

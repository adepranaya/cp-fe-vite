<template>
  <layout name="AuthLayout">
    <v-container
      class="text-center"
      fill-height
      style="height: calc(100vh - 58px);"
    >
      <v-row align="center">
        <v-col>
          <h1 class="display-2 primary--text">Fordidden, 403</h1>

          <p>Mohon maaf kamu tidak mempunyai akses ke menu ini 🙁</p>

          <v-btn :to="`/`" color="primary" outlined>
            ke halaman utama
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </layout>
</template>

<script>
import Layout from "@/layouts/Layout";

export default {
  components: {
    Layout
  },
  name: "FourOhFour",
  props: {
    lang: {
      type: String,
      default: "en"
    }
  },
  created() {
    this.$ssrContext && this.$ssrContext.res.status(403);
  }
};
</script>

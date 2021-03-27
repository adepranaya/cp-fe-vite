<template>
  <layout
    name="AdminLayout"
    :layoutProps="{ title: title, breadcrumbItems: breadcrumbItems }"
  >
    <v-card class="pa-3">
      <div>
        👋 Hello World
      </div>
    </v-card>
  </layout>
</template>

<script>
import Layout from "@/layouts/Layout";
import { mapState } from "vuex";

// import Layout from "@/layouts/Layout";

export default {
  name: "Dashboard",
  components: {
    Layout
  },
  data() {
    return {
      title: "Dashboard",
      breadcrumbItems: []
    };
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style></style>

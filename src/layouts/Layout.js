import Vue from "vue";

export default {
  name: "Layout",
  props: {
    name: {
      type: String,
      required: true
    },
    layoutProps: {}
  },
  created() {
    // Check if the layout component
    // has already been registered.
    if (!Vue.options.components[this.name]) {
      Vue.component(this.name, () => import(`./${this.name}.vue`));
    }

    this.$parent.$emit("update:layout", this.name);
    this.$parent.$emit("update:layoutProps", this.layoutProps);
  },
  render() {
    return this.$slots.default[0];
  }
};

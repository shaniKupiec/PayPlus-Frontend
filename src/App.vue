<template>
  <section class="app">
    <appHeader />
    <router-view />
    <section v-if="isLoading">loading...</section>
    <section :class="userMsg.type" v-if="userMsg">{{ userMsg.msg }}</section>
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue";

export default {
  created() {},
  components: {
    appHeader,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    userMsg() {
      return this.$store.getters.userMsg;
    },
  },
};
</script>

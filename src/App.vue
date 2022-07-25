<template>
  <section class="app">
    <router-view />
    <section v-if="isLoading">loading...</section>
    <section :class="userMsg.type" v-if="userMsg">{{ userMsg.msg }}</section>
  </section>
</template>

<script>
export default {
  created() {},
  components: {},
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
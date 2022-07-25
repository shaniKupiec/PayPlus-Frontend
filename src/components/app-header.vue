<template>
  <header class="app-header">
    <img src="../../public/logo.png" class="app-header__logo" alt="" />
    <span v-if="loggedInUser" class="app-header__username">{{ loggedInUser?.username }}</span>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>

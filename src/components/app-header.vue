<template>
  <header class="app-header">
    <span class="app-header__logo">logo</span>
    <span class="app-header__username">{{username}}</span>
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
    username() {
      return this.$store.getters.loggedInUser.username;
    },
  },
};
</script>

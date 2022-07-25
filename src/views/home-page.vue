<template>
  <appHeader />
  <dashboard />
  <main>
    home
    <pre>
    {{ loggedInUser }}
  </pre
    >
  </main>
</template>

<script>
import appHeader from "../components/app-header.vue";
import dashboard from "../components/dashboard.vue";

export default {
  components: {
    appHeader,
    dashboard,
  },
  data() {
    return {};
  },
  created() {
    // if(!this.loggedInUser) this.$router.push("/");
  },
  methods: {},
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
  },
};
</script>

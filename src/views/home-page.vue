<template>
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
import dashboard from "../components/dashboard.vue";

export default {
  components: {
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

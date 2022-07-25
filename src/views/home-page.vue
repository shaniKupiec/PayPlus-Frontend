<template>
  <dashboard />
  <hoursList />

  <!-- <pre>
    {{ loggedInUser }}
  </pre> -->
</template>

<script>
import dashboard from "../components/dashboard.vue";
import hoursList from "../components/hours-list.vue";

export default {
  components: {
    dashboard,
    hoursList,
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

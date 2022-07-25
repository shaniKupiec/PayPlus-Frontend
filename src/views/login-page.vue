<template>
  <form @submit.prevent="login">
    <label for="username">User Name</label>
    <input type="text" placeholder="user name" v-model="username" id="username" />
    <label for="password">Password</label>
    <input type="password" placeholder="password" v-model="password" id="password" />
    <button>submit</button>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  async created() {
    const user = await this.$store.dispatch("loadLoggedInUser");
    console.log("user", user);
    if (user) this.$router.push("/home");
  },
  methods: {
    async login() {
      console.log("userCred", this.username, this.password);
      const userCred = {
        username: this.username,
        password: this.password,
      };
      await this.$store.dispatch({ type: "login", userCred });
      this.$router.push("/home");
    },
  },
  computed: {},
};
</script>

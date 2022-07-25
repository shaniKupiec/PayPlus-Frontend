<template>
  <main class="login-container">
    <form @submit.prevent="login" class="login-container__form">
      <label for="username">שם משתמש</label>
      <input type="text" placeholder="שם משתמש" v-model="username" id="username" />
      <label for="password">סיסמה</label>
      <input type="password" placeholder="סיסמה" v-model="password" id="password" />
      <button>כניסה למערכת</button>
    </form>
  </main>
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

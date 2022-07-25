<template>
  <section class="dashboard">
    <header class="dashboard__header">אזור אישי</header>
    <main class="dashboard__main">
      <customCard>
        <template v-slot:img> <img src="../../public/Union.png" alt="" /> </template>
        <template v-slot:title> תאריך:</template>
        <template v-slot:data> 2022 </template>
      </customCard>
      <customCard>
        <template v-slot:img> <img src="../../public/logout.png" alt="" /> </template>
        <template v-slot:title> נכנס ב- </template>
        <template v-slot:data> 2022 </template>
      </customCard>
      <customCard>
        <template v-slot:img> <img src="../../public/time.png" alt="" /> </template>
        <template v-slot:title> סה"כ שעות: </template>
        <template v-slot:data> 2022 </template>
      </customCard>
      <customCard>
        <template v-slot:img> <img src="../../public/coffee.png" alt="" /> </template>
        <template v-slot:title> הפסקה: </template>
        <template v-slot:data> 2022 </template>
      </customCard>
      <button class="dashboard__main__btn" style="backgroundColor:#5863F8">כניסה למשמרת</button>
      <button class="dashboard__main__btn" style="backgroundColor:#34AA53">יציאה להפסקה</button>
      <button class="dashboard__main__btn" style="backgroundColor:#FF3366">סגירת משמרת</button>
    </main>
  </section>
</template>

<script>
import customCard from "./custom-card.vue";

export default {
  components: {
    customCard,
  },
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

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
      <button @click="startShift()" class="dashboard__main__btn" style="backgroundColor: #5863f8" :class="{ disable: loggedInUser.timeLog[0].end === null }">כניסה למשמרת</button>

      <button @click="onBreak()" class="dashboard__main__btn" style="backgroundColor: #34aa53" :class="{ disable: loggedInUser.timeLog[0].end !== null }">
        {{ isAboutToStartBreak ? "יציאה הפסקה" : "סיום להפסקה" }}
      </button>

      <button @click="endShift()" class="dashboard__main__btn" style="backgroundColor: #ff3366" :class="{ disable: loggedInUser.timeLog[0].end !== null }">סגירת משמרת</button>
    </main>
  </section>
  <pre>
    {{ isAboutToStartBreak }}
  </pre>
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
  methods: {
    startShift() {
      this.loggedInUser.timeLog.unshift({
        start: Date.now(),
        breaks: [],
        end: null,
      });
      console.log("this.loggedInUser", this.loggedInUser);
      this.$store.dispatch({ type: "updateUser", user: this.loggedInUser });
    },
    onBreak() {
      if(this.isAboutToStartBreak){
        this.loggedInUser.timeLog[0].breaks.unshift({
          start: Date.now(),
          end: null
          })
        console.log('strting break');
      } else{
        this.loggedInUser.timeLog[0].breaks[0].end = Date.now()
        console.log('ending break');
      }
      this.$store.dispatch({ type: "updateUser", user: this.loggedInUser });
    },
    endShift() {
      this.loggedInUser.timeLog[0].end = Date.now();
      console.log("this.loggedInUser", this.loggedInUser);
      this.$store.dispatch({ type: "updateUser", user: this.loggedInUser });
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    isAboutToStartBreak() {
      return this.$store.getters.loggedInUser?.timeLog[0].breaks[0]?.end !== null;
    },
  },
};
</script>

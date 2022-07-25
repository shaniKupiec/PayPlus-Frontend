<template>
  <section class="dashboard">
    <header class="dashboard__header">אזור אישי</header>
    <main class="dashboard__main">
      <customCard>
        <template v-slot:img> <img src="../../public/Union.png" alt="" /> </template>
        <template v-slot:title> תאריך:</template>
        <template v-slot:data> {{ new Date().toUTCString() }} </template>
      </customCard>
      <customCard>
        <template v-slot:img> <img src="../../public/logout.png" alt="" /> </template>
        <template v-slot:title> נכנס ב- </template>
        <template v-slot:data> {{ startShiftClock }} </template>
      </customCard>
      <customCard>
        <template v-slot:img> <img src="../../public/time.png" alt="" /> </template>
        <template v-slot:title> סה"כ שעות: </template>
        <template v-slot:data> {{ hoursOfWork }} </template>
      </customCard>
      <customCard>
        <template v-slot:img> <img src="../../public/coffee.png" alt="" /> </template>
        <template v-slot:title> הפסקה: </template>
        <template v-slot:data> {{ hoursOfBreak }} </template>
      </customCard>
      <button @click="startShift()" class="dashboard__main__btn" style="backgroundColor: #5863f8" :class="{ disable: loggedInUser.timeLog[0].end === null }">כניסה למשמרת</button>
      <button @click="onBreak()" class="dashboard__main__btn" style="backgroundColor: #34aa53" :class="{ disable: loggedInUser.timeLog[0].end !== null }">
        {{ isAboutToStartBreak ? "יציאה הפסקה" : "סיום להפסקה" }}
      </button>
      <button @click="endShift()" class="dashboard__main__btn" style="backgroundColor: #ff3366" :class="{ disable: loggedInUser.timeLog[0].end !== null }">סגירת משמרת</button>
    </main>
    <section class="dashboard__clock">
      {{ clock }}
    </section>
  </section>
</template>

<script>
import customCard from "./custom-card.vue";

export default {
  components: {
    customCard,
  },
  data() {
    return {
      time: new Date()
    };
  },
  created() {
    setInterval(() => {
        this.time = new Date()
    }, 1000)
  },
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
      if (this.isAboutToStartBreak) {
        this.loggedInUser.timeLog[0].breaks.unshift({
          start: Date.now(),
          end: null,
        });
        console.log("strting break");
      } else {
        this.loggedInUser.timeLog[0].breaks[0].end = Date.now();
        console.log("ending break");
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
    startShiftTime() {
      return this.$store.getters.loggedInUser?.timeLog[0].start;
    },
    startShiftClock() {
      return new Date(this.startShiftTime).getHours() + ":" + new Date(this.startShiftTime).getMinutes() + ":" + new Date(this.startShiftTime).getSeconds();
    },
    hoursOfWork() {
      let millisecondsOfWork = Date.now() - this.startShiftTime - this.timeOfBreak;
      return (millisecondsOfWork / 1000 / 60 / 60).toFixed(2);
    },
    hoursOfBreak() {
      return (this.timeOfBreak / 1000 / 60 / 60).toFixed(2);
    },
    timeOfBreak() {
      let millisecondsOfBreak = 0;
      for (let index = 0; index < this.loggedInUser.timeLog[0].breaks.length; index++) {
        millisecondsOfBreak += this.loggedInUser.timeLog[0].breaks[index].end - this.loggedInUser.timeLog[0].breaks[index].start;
      }
      return millisecondsOfBreak;
    },
    clock() {
      let millisecondsOfCurrentWork = this.time - this.startShiftTime;
      return new Date(millisecondsOfCurrentWork).getHours() + ":" + new Date(millisecondsOfCurrentWork).getMinutes() + ":" + new Date(millisecondsOfCurrentWork).getSeconds();
    },
  },
};
</script>

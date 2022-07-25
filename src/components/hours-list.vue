<template>
  <section class="hours-list">
    דוח משמרות
    <table>
      <tr>
        <th>תאריך</th>
        <th>שעת כניסה</th>
        <th>שעת יציאה</th>
        <th>סה"כ שעות כולל הפסקות</th>
        <th>סה"כ שעות לא כולל הפסקות</th>
        <th>הפסקה</th>
      </tr>
      <tr v-for="shiftData in loggedInUser.timeLog" :key="shiftData.start">
        <td>{{ new Date(shiftData.start).toUTCString() }}</td>
        <td>{{ new Date(shiftData.start).getHours() + ":" + new Date(shiftData.start).getMinutes() }}</td>
        <td>{{ formatHour(shiftData.end) }}</td>
        <td>{{ "xx" }}</td>
        <td>{{ "xx" }}</td>
        <td>{{ "xx" }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    formatHour(milliseconds) {
      new Date(milliseconds).getHours() + ":" + new Date(milliseconds).getMinutes();
    },
    hoursOfWork(shiftData) {
      let millisecondsOfWork = shiftData.end - shiftData.start - this.timeOfBreak(shiftData);
      return (millisecondsOfWork / 1000 / 60 / 60).toFixed(2);
    },
    hoursOfBreak(shiftData) {
      return (this.timeOfBreak(shiftData) / 1000 / 60 / 60).toFixed(2);
    },
    timeOfBreak(shiftData) {
      let millisecondsOfBreak = 0;
      for (let index = 0; index < shiftData.breaks.length; index++) {
        millisecondsOfBreak += shiftData.breaks[index].end - shiftData.breaks[index].start;
      }
      return millisecondsOfBreak;
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    },
    // isAboutToStartBreak() {
    //   return this.$store.getters.loggedInUser?.timeLog[0].breaks[0]?.end !== null;
    // },
    // startShiftTime() {
    //   return this.$store.getters.loggedInUser?.timeLog[0].start;
    // },
    // endShiftTime() {
    //   return this.$store.getters.loggedInUser?.timeLog[0].end;
    // },
    // startShiftClock() {
    //   return new Date(this.startShiftTime).getHours() + ":" + new Date(this.startShiftTime).getMinutes()
    // },
    // endShiftClock() {
    //   return new Date(this.endShiftTime).getHours() + ":" + new Date(this.endShiftTime).getMinutes()
    // },
  },
};
</script>

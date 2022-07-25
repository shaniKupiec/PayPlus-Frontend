<template>
  <section>
    <customCard>
      <template v-slot:title> date </template>
      <template v-slot:data> 2022 </template>
    </customCard>
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

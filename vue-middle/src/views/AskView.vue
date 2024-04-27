<template>
  <div>AskView</div>
  <ListItem v-bind:data="askData" />
  <ul>
    <li v-for="ask in this.$store.state.asks" v-bind:key="ask">
      <router-link v-bind:to="ask.url">{{ ask.title }}</router-link>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </li>
  </ul>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: { ListItem },
  computed: {
    askData() {
      return this.$store.state.asks;
    },
  },
  created() {
    this.$store.dispatch("FETCH_DATA", { url: "/v0/ask/1.json", name: "asks" });
  },
};
</script>

<style scoped></style>

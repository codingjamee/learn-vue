<template>
  <div>
    <ListItem v-bind:data="newsData" />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
export default {
  components: { ListItem },
  computed: {
    newsData() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.dispatch("FETCH_DATA", {
      url: "/v0/news/1.json",
      name: "news",
    });
  },
};
</script>

<style scoped></style>

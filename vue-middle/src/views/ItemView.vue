<template>
  <div>
    <section>
      <div>
        <div>
          <router-link v-bind:to="`user/${items.user}`">
            {{ items.user }}
          </router-link>
        </div>
        <div>
          {{ items.time_ago }}
        </div>
      </div>
      <h2>{{ items.title }}</h2>
    </section>
    <section>
      <div v-html="items.content"></div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  created() {
    const itemId = this.$route.query.id;
    console.log(itemId);
    this.$store.dispatch("FETCH_DATA", {
      url: `/v0/item/${itemId}.json`,
      name: "items",
    });
  },
};
</script>

<style scoped></style>

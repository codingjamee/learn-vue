<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.users;
    },
  },
  created() {
    const userName = this.$route.params.userId;
    this.$store.dispatch("FETCH_DATA", {
      url: `/v0/user/${userName}.json`,
      name: "users",
    });
  },
};
</script>

<style scoped></style>

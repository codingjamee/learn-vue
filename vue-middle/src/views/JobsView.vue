<template>
  <div>JobsView</div>
  <ul>
    <li v-for="job in jobs" v-bind:key="job">
      <a v-bind:href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
// import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      jobs: (state) => state.jobs,
    }),
    // ...mapGetters({
    //   jobs: "getJobs",
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_DATA", {
      url: "/v0/jobs/1.json",
      name: "jobs",
    });
  },
};
</script>

<style scoped></style>

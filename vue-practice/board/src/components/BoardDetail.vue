<template>
  <div>board detail</div>
  <div>{{ boardDetail }}</div>
  <button>수정하기</button>
  <button @click="deleteBoard">삭제하기</button>
</template>

<script>
import { deleteData, getData } from "@/api";
export default {
  data() {
    return {
      boardDetail: {},
    };
  },
  created() {
    getData(`boards/${this.$route.params.id}/`)
      .then((response) => (this.boardDetail = response.data))
      .catch((error) => {
        console.error("Failed to fetch board details:", error);
        this.$router.push("/board");
      });
  },
  methods: {
    deleteBoard() {
      this.$router.push("/board");
      deleteData(`boards/${this.$route.params.id}/`)
        .then((response) => {
          console.log(response);
          this.$router.push("/board");
        })
        .catch((error) => {
          console.error("Failed to delete board details:", error);
        });
    },
  },
};
</script>

<style scoped></style>

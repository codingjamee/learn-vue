<template>
  <div>board detail</div>
  <div>{{ boardDetail }}</div>
  <button @click="editBoard">수정하기</button>
  <button @click="this.$router.push(`/board`)">목록으로</button>
  <button @click="deleteBoard">삭제하기</button>
</template>

<script>
import { deleteData } from "@/api";
export default {
  data() {
    return {
      boardDetail: this.$store.state.boardData,
    };
  },
  created() {
    this.$store.dispatch("FETCH_DATA", this.$route.params.id);
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
    editBoard() {
      this.$router.push(`/edit/${this.$route.params.id}`);
    },
  },
};
</script>

<style scoped></style>

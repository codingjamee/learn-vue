<template>
  <div>board detail</div>
  <div>{{ boardDetail }}</div>
  <button>수정하기</button>
  <button>삭제하기</button>
</template>

<script>
import { getData } from "@/api";
export default {
  data() {
    return {
      boardDetail: {},
    };
  },
  created() {
    getData(`boards/${this.$route.params.id}/`).then(
      (response) => (this.boardDetail = response.data)
    );
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <div class="board-head">게시판</div>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody v-for="(board, index) in boards" v-bind:key="board.id">
        <th>
          <router-link v-bind:to="`/board/${board.id}`">{{
            index
          }}</router-link>
        </th>
        <th>
          <router-link v-bind:to="`/board/${board.id}`">{{
            board.title
          }}</router-link>
        </th>
        <th>
          <router-link v-bind:to="`/board/${board.id}`">{{
            board.create_at
          }}</router-link>
        </th>
        <hr />
      </tbody>
    </table>
    <hr />
    <button @click="this.$router.push(`newPost`)">글 작성하기</button>
  </div>
</template>

<script>
import { getData } from "@/api";
export default {
  data() {
    return {
      boards: [],
    };
  },
  created() {
    getData("boards/").then((response) => (this.boards = response.data));
  },
};
</script>

<style scoped></style>

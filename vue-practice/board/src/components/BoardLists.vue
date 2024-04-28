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
        <router-link v-bind:to="`/board/${board.id}`">
          <th>{{ index }}</th>
          <th>{{ board.title }}</th>
          <th>{{ board.create_at }}</th>
        </router-link>
      </tbody>
    </table>
    <hr />
    <ul>
      <li v-for="board in boards" v-bind:key="board.id"></li>
    </ul>
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

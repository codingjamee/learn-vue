<template>
  <div>boardEdit</div>
  <input type="text" v-model="boardTitle" />
  <textarea v-model="textContent"></textarea>
  <button @click="onEdit">작성하기</button>
  <button @click="this.$router.push(`/board`)">취소하기</button>
</template>

<script>
import { postData } from "@/api";

export default {
  computed: {},
  data() {
    return {
      boardTitle: this.$store.state.boardData.title,
      textContent: this.$store.state.boardData.content,
    };
  },
  created() {},
  methods: {
    onEdit() {
      console.log({
        data: { title: this.boardTitle, content: this.textContent },
      });
      postData({ title: this.boardTitle, content: this.textContent }).then(
        (response) => {
          if (response.status === 201) this.$router.push(`/board`);
        }
      );
    },
  },
};
</script>

<style scoped></style>

<template>
  <div>boardEdit</div>
  <input type="text" v-model="boardTitle" />
  <textarea v-model="textContent"></textarea>
  <button @click="onEdit">수정하기</button>
  <button @click="this.$router.push(`board/${this.$route.params.id}`)">
    취소하기
  </button>
</template>

<script>
import { putData } from "@/api";

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
        id: this.$route.params.id,
        data: { title: this.boardTitle, content: this.textContent },
      });
      putData({
        id: `boards/${this.$route.params.id}/`,
        data: { title: this.boardTitle, content: this.textContent },
      }).then((response) => {
        if (response.status === 200)
          this.$router.push(`/board/${this.$route.params.id}/`);
      });
    },
  },
};
</script>

<style scoped></style>

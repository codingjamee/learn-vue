<template>
  <input v-model="todo.title" type="text" />
  <button @click="onAdd(todo)">추가하기</button>
</template>

<script>
export default {
  data() {
    return {
      todo: {},
    };
  },
  methods: {
    onAdd(todo) {
      this.$emit("submit", todo);
      this.todo = {};
    },
  },
};
</script>

<style scoped></style>

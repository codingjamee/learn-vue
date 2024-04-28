<template>
  <div>TodoHeader 할일목록</div>
  <ul>
    <li v-for="todo in todolist" :key="todo.id">
      {{ todo }}
      <button @click="this.$emit('deleteList', todo.id)">삭제</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["todolist"],
};
</script>

<style scoped></style>

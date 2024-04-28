<template>
  <hr />
  <TodoListHeader :todolist="list" v-on:deleteList="deleteList" />
  <TodoListInput v-on:submit="onSubmit" />
  <TodoListFooter />
  <hr />
</template>

<script>
import TodoListHeader from "./TodoListHeader.vue";
import TodoListInput from "./TodoListInput.vue";
import TodoListFooter from "./TodoListFooter.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    onSubmit(todo) {
      this.list = [
        ...this.list,
        { id: this.list.length + 1, title: todo.title, done: false },
      ];
    },
    deleteList(id) {
      this.list = this.list.filter((todo) => todo.id !== id);
    },
  },
  components: {
    TodoListHeader,
    TodoListInput,
    TodoListFooter,
  },
};
</script>

<style scoped></style>

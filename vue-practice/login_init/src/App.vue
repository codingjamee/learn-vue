<template>
  <div>
    <LoginForm></LoginForm>
    <TodoListWrapper />
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import TodoListWrapper from "./components/TodoListWrapper.vue";
export default {
  components: { LoginForm, TodoListWrapper },
};
</script>

<style scoped></style>

<template>
  <div>
    <form action="">
      <label for="login">로그인</label>
      <input id="login" type="text" v-model="id" />
      <label for="password">비밀번호</label>
      <input
        id="password"
        type="password"
        v-model="password"
        autocomplete="false"
      />
      <button @click="Submit">제출</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },

  methods: {
    Submit(event) {
      event.preventDefault();

      console.log({ id: this.id, password: this.password });
    },
  },
};
</script>

<style scoped></style>

<template>
  <div id="app">
    <ToolBar />

    <router-view v-slot="{ Component }">
      <transition :name="page">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  data() {
    return {
      a: "",
    };
  },
  components: {
    ToolBar,
  },
};
</script>

<style>
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  transition: opacity 0;
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Button from "remoteApp/Button";
import { createRoot } from "react-dom/client";
import { createElement } from "react";

onMounted(() => {
  const container = document.createElement("div"); // React 컴포넌트를 렌더링할 DOM 요소 생성
  const root = createRoot(container); // React의 루트 생성

  root.render(createElement(Button));

  document.getElementById("reactRoot")?.appendChild(container);
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div id="reactRoot" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

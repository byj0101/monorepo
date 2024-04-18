<script setup>
import { onMounted } from "vue";
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
  <div>About</div>
  <div className="react" id="reactRoot" />
</template>

<style scoped>
.react {
  background-color: lightblue;
  padding: 20px;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import remoteReducers from "remoteApp/reducers";
import todoSlice from "../store/reducers/todos";
import { useDispatch, useSelector } from "../store/helpers";

const { addTask, removeTodo } = todoSlice.actions;
const dispatch = useDispatch();
const todos = useSelector((state: any) => state.todos);
const todotodos = useSelector((state: any) => state.todotodos);

const { addTask: addRemoteTask, removeTodo: removeRemoteTodo } =
  remoteReducers.todotodos.actions;

const update = () => {
  dispatch(addTask(String(Math.random())));
};

const remove = () => {
  dispatch(removeTodo());
};

const remoteUpdate = () => {
  dispatch(addRemoteTask(String(Math.random())));
};

const remoteRemove = () => {
  dispatch(removeRemoteTodo());
};

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div>
    <div>Redux 테스트</div>
    <button @click="update">todo 리스트 추가</button>
    <ul>
      <li v-for="(item, idx) in todos.todoList" :key="idx">{{ item }}</li>
    </ul>
    <button @click="remove">todo list 삭제</button>
  </div>

  <div>
    <div>Redux remote 테스트</div>
    <button @click="remoteUpdate">todotodo 리스트 추가</button>
    <ul>
      <li v-for="(item, idx) in todotodos.todotodoList" :key="idx">
        {{ item }}
      </li>
    </ul>
    <button @click="remoteRemove">todotodo list 삭제</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

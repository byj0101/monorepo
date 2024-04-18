<script setup lang="ts">
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
</script>

<template>
  <div className="border-text">
    <div>host 에서 올린 Redux</div>
    <button @click="update">todo 리스트 추가</button>
    <ul>
      <li v-for="(item, idx) in todos.todoList" :key="idx">{{ item }}</li>
    </ul>
    <button @click="remove">todo list 삭제</button>
  </div>

  <div className="border-text">
    <div>remote 에서 올린 Redux</div>
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
.border-text {
  border: 1px solid black;
}
</style>

// storePlugin.ts
import { App, reactive } from "vue";
import { EnhancedStore } from "@reduxjs/toolkit";

export const storeKey = Symbol("Redux-Store");

export type RootState = {
  todos: { todoList: string[] };
};

export const createRedux = (store: EnhancedStore) => {
  const rootStore = reactive<{ state: RootState }>({
    state: store.getState(),
  });
  const plugin = {
    install: (app: App) => {
      app.provide<{ state: RootState }>(storeKey, rootStore);

      store.subscribe(() => {
        rootStore.state = store.getState();
      });
    },
  };
  return plugin;
};

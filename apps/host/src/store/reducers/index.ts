import { combineReducers } from "redux";
import remoteReducers from "remoteApp/reducers";
import { reduce } from "lodash";

import todos from "./todos";

const remoteReducerList = reduce(
  remoteReducers,
  (acc: any, value, key) => {
    acc[key] = value.reducer;

    return acc;
  },
  {}
);

const rootReducer = combineReducers({
  ...remoteReducerList,
  todos: todos.reducer,
});

export default rootReducer;

import { inject, computed } from "vue";
import { store, RootState } from ".";
import { storeKey } from "./storePlugin";

export const useDispatch = () => store.dispatch;

export const useSelector = <State extends RootState = RootState>(
  fn: (state: State) => State[keyof State]
) => {
  const rootStore = inject(storeKey) as { state: RootState };
  return computed(() => fn(rootStore.state as State));
};

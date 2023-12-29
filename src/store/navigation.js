import { Store } from "../core/core";

const navigationStore = new Store({
  open: false,
});

export default navigationStore;

export function openNavigation() {
  navigationStore.state.open = true;
}

export function closeNavigation() {
  navigationStore.state.open = false;
}

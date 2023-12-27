import { Store } from "../core/core";

const store = new Store({
  title: "",
  todoItems: [],
  filteredItems: [],
  loading: false,
  message: "",
  activeTab: "all",
});
export default store;

export async function loadTodo() {
  try {
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
    });
    const json = await res.json();

    store.state.todoItems = json;
    store.state.filteredItems = json;
  } catch {
    console.log("error");
  } finally {
    store.state.loading = false;
  }
}

export async function writeTodo(title) {
  try {
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
      body: JSON.stringify({
        title: store.state.title,
        // order: store.state.order,
      }),
    });
  } catch {
    console.log("error");
    // } finally {
    //   store.state.loading = false;
  }
}

export async function delTodo(todoId) {
  try {
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
      body: JSON.stringify({
        id: todoId,
      }),
    });
  } catch {
    console.log("error");
    // } finally {
    //   store.state.loading = false;
  }
}

export function changeActiveTab(newTab) {
  store.state.activeTab = newTab;
}

import { Store } from "../core/core";

const store = new Store({
  title: "",
  todoItems: [],
  loading: false,
  message: "",
});
export default store;
export async function LoadTodo() {
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
  } catch {
    console.log("error");
    // } finally {
    //   store.state.loading = false;
  }
}
LoadTodo();
export async function WriteTodo(title) {
  try {
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
      body: JSON.stringify({
        // title: titleValue,
        title: store.state.title,
      }),
    });
  } catch {
    console.log("error");
    // } finally {
    //   store.state.loading = false;
  }
}
export async function DelTodo() {
  try {
    const res = await fetch("https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
      body: JSON.stringify({
        // id: '',
      }),
    });
  } catch {
    console.log("error");
    // } finally {
    //   store.state.loading = false;
  }
}

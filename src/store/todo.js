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
    store.state.filteredItems = store.state.todoItems;
  } catch (error) {
    console.log("error", error.message);
  } finally {
    store.state.loading = false;
  }
}

export async function writeTodo() {
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

    const data = await res.json();
    store.state.todoItems = [data, ...store.state.todoItems];
    store.state.filteredItems = store.state.todoItems;
  } catch (error) {
    console.log("error", error.message);
    // } finally {
    //   store.state.loading = false;
  }
}

export async function delTodo(todoId) {
  try {
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
    });
    // console.log(res);
    // console.log(store.state.todoItems);
    // console.log(store.state.todoItems.filter((item) => item.id !== todoId));
    // 서버의 상태 변경 성공됨
    // 하지만 클라이언트의 상태는 변경되지 않아 화면이 업데이트 안됨
    // 그러므로 클라이언트 스토어 상태(store)의 todoItems, filteredItems 상태 업데이트
    // 불변 데이터 관리 방식으로 상태 업데이트
    // - 삭제할 todoId 값과 일치하지 않는 아이템만 필터링하여 store.state.todoItems|filteredItems 업데이트
    store.state.todoItems = store.state.todoItems.filter((item) => item.id !== todoId);
    store.state.filteredItems = store.state.todoItems;
  } catch {
    console.log("error");
    // } finally {
    //   store.state.loading = false;
  }
}

export async function editTodo(title, status, todoId) {
  try {
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
      body: JSON.stringify({
        title: title,
        id: todoId,
        done: status,
      }),
    });

    const data = await res.json();
    store.state.todoItems = store.state.todoItems.map((item) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    });
    store.state.filteredItems = store.state.todoItems;

    console.log(res);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
}

export function changeActiveTab(newTab) {
  store.state.activeTab = newTab;
}

export function filteredTodoList(status) {
  store.state.filteredItems = store.state.todoItems.filter((item) => {
    if (status === "all") {
      return true;
    } else if (status === "doing") {
      return item.done === false;
    } else {
      return item.done === true;
    }
  });
}

export async function todoDoneState(title, status, todoId) {
  try {
    const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        apikey: "KDT7_GrZ1eYBo", // KDT 7기 APIKEY 입니다!
        username: "KDT7_HaSungPil",
      },
      body: JSON.stringify({
        title: title,
        id: todoId,
        done: status,
      }),
    });

    const data = await res.json();

    store.state.todoItems = store.state.todoItems.map((item) => {
      if (item.id === data.id) {
        return data;
      }
      return item;
    });
    store.state.filteredItems = store.state.todoItems;
    console.log(store.state.filteredItems);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
}

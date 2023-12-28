import { Component } from "../core/core";
import { delTodo, editTodo, todoDoneState } from "../store/todo";
import DialogEdit from "../routes/DialogEdit";

export default class Todolist extends Component {
  constructor(props) {
    super({
      props,
      tagName: "li",
    });
  }

  render() {
    const { todo } = this.props;
    const updateSplit = todo.updatedAt.split("T")[0]; // T를 기준으로 배열로 반환 0번째것만 반환
    const stateTodo = todo.done ? "done" : "doing";
    const checkedTodo = todo.done ? "checked" : "";
    const title = todo.title.split("/")[0];
    const content = todo.title.split("/")[1];

    const colors = ["pink", "blue", "green", "black", "purple", "orange"];

    const random = () => {
      return Math.floor(Math.random() * (colors.length - 0)) + 0;
    };

    this.el.classList.add(colors[random()]);
    this.el.innerHTML = /* html */ `
      <div class="align both vm ico">
        <div>
          <input type="checkbox" id="${todo.id}" ${checkedTodo} class="checkbox" /><label for="${todo.id}" aria-label="완료"></label>
          <button class="btn-more" aria-label="옵션"></button>
          <dialog class="notes-list__option">
            <div>
              <button class="btn-edit">Edit</button>
              <button class="btn-delete">Delete</button>
            </div>
          </dialog>
        </div>
      </div>
      <div class="notes-list__title">${title}</div>
      <div class="notes-list__content">
        ${content}
      </div>
      <div class="align both">
        <div class="notes-list__state ${stateTodo}"></div>
        <div class="notes-list__date txt-right">${updateSplit}</div>
      </div>
    `;

    const moreEl = this.el.querySelectorAll(".btn-more");
    const checkEl = this.el.querySelector("input[type='checkbox']");
    const editEl = this.el.querySelectorAll(".btn-edit");
    const deleteEl = this.el.querySelectorAll(".btn-delete");
    const editDialogEl = new DialogEdit({
      container: this.el,
      title: title,
      content: content,
      id: todo.id,
      done: todo.done,
    });

    moreEl.forEach((el) => {
      el.addEventListener("click", (e) => {
        const nextEl = el.nextElementSibling;
        nextEl.classList.toggle("toggle");
      });
    });

    deleteEl.forEach((el) => {
      el.addEventListener("click", () => {
        const parentEl = el.parentElement.parentElement;
        parentEl.classList.remove("toggle");
        delTodo(todo.id);
      });
    });

    editEl.forEach((el) => {
      el.addEventListener("click", () => {
        const parentEl = el.parentElement.parentElement;
        parentEl.classList.remove("toggle");
        editDialogEl.open();
      });
    });

    checkEl.addEventListener("change", (el) => {
      const checked = el.target.checked;
      todoDoneState(todo.title, checked, todo.id);
    });
  }
}

import { Component } from "../core/core";

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
    const title = todo.title.split("/")[0];
    const content = todo.title.split("/")[1];

    const colors = ["pink", "blue", "green", "black", "purple", "orange"];

    const random = () => {
      return Math.floor(Math.random() * (colors.length - 0)) + 0;
    };

    this.el.classList.add(colors[random()]);
    this.el.innerHTML = /* html */ `
      <div class="align both vm ico">
        <button class="btn-more" aria-label="옵션"></button>
        <dialog class="notes-list__option">
          <div>
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
          </div>
        </dialog>
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
    const dialogEl = this.el.querySelector("dialog");
    const editEl = this.el.querySelector(".btn-edit");
    const deleteEl = this.el.querySelector(".btn-delete");

    moreEl.forEach((el) => {
      el.addEventListener("click", (e) => {
        const nextEl = el.nextElementSibling;
        nextEl.classList.toggle("toggle");
      });
    });

    // deleteEl.forEach((el) => {
    //   el.addEventListener("click", (e) => {});
    // });

    // window.addEventListener("click", () => {
    //   dialogEl.close();
    // });
  }
}

import { Component } from "../core/core";
import { editTodo } from "../store/todo";

export default class DialogEdit extends Component {
  constructor({ container, title, content, id, done }) {
    super({
      tagName: "dialog",
      state: {
        container,
        title,
        content,
        id,
        done,
      },
    });
  }

  render() {
    this.state.container.append(this.el);
    this.el.classList.add("edit");
    this.el.innerHTML = /* html */ `
        <h2 class="edit__title">Todo Palnner Edit</h2>
        <div class="edit__content">
          <label for="txt1_${this.state.id}">Title</label>
          <input type="text" id="txt1_${this.state.id}" class="todo-title" placeholder="제목을 입력하세요." value="${this.state.title}" />
          <label for="txt2_${this.state.id}">Content</label>
          <input type="text" id="txt2_${this.state.id}" class="todo-content" placeholder="내용을 입력하세요." value="${this.state.content}" />
        </div>
        <div class="edit__btns txt-right">
            <button class="btn large black close edit">Edit</button>
            <button class="btn large white close">Cancel</button>
        </div>
    `;

    this.close();
    this.edit();
  }

  open() {
    this.el.showModal();
  }

  close() {
    const closeEl = this.el.querySelectorAll(".close");
    closeEl.forEach((el) => {
      el.addEventListener("click", () => {
        this.el.close();
      });
    });
  }

  edit() {
    const btnEditEl = this.el.querySelector(".edit");
    btnEditEl.addEventListener("click", () => {
      const titleValue = this.el.querySelector(".todo-title").value;
      const titleContent = this.el.querySelector(".todo-content").value;
      const bindTitle = titleValue + "/" + titleContent;
      editTodo(bindTitle, this.state.done, this.state.id);
    });
  }
}

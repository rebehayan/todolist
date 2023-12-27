import { Component } from "../core/core";

export default class DialogEdit extends Component {
  constructor() {
    super({
      tagName: "dialog",
    });
  }

  render() {
    this.el.classList.add("edit");
    this.el.innerHTML = /* html */ `
        <h2>Todo 수정</h2>
        <div class="edit__content"><input type="text" /></div>
        <div class="edit__btns">
            <button class="btn large white close">수정</button>
            <button class="btn large white close">취소</button>
        </div>
    `;

    const closeEl = this.el.querySelector(".close");

    closeEl.addEventListener("click", () => {
      this.el.close();
    });
    // closeEl.addEventListener("click", this.close.bind(this));
  }

  open() {
    this.el.show();
  }

  close() {
    this.el.close();
  }
}

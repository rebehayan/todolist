import { Component } from "../core/core";
import propfile from "../images/profile.jpg";

export default class About extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div class="profile__visual">
        <img src="${propfile}" alt="" />
        <div>
          <span>Just Todo</span>
          <i>CEO. HaSungPil</i>
        </div>
      </div>
      <ul class="profile">
        <li>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, odit ipsa et itaque commodi provident temporibus eaque ut aspernatur dicta similique, doloribus dolorum accusamus exercitationem iusto, illum consectetur. Quos, tenetur.
        </li>
        <li>
          <strong>42+</strong>
          <span>Awards</span>
        </li>
        <li>
          <strong>5+ years</strong>
          <span>Experience</span>
        </li>
        <li>
          <strong>424+</strong>
          <span>Participated</span>
        </li>
      </ul>
    `;
  }
}

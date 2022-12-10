export function initinput() {
  class TextField extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");
      const div = document.createElement("div");
      const style = document.createElement("style");

      div.classList.add("root");

      div.innerHTML = `
      <label class=" label">${label}</label>
     
     <input class="input" type="${this.id}" placeholder=" ingresa tu ${label}"/>
     
      `;
      style.innerHTML = `
        .root{
        display: flex;
        flex-direction: column;
      }
      .div {
        
      }
      .label{
        font-size:18px;
        margin: 18px;
      }
        
      .input{
        padding: 17px 13px;
        margin: 18px;
        border :3px solid black;
        border-radius 4px
        font-size:18px;
      }
      `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("input-field", TextField);
}

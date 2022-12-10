export function initthankyou(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
  <div class="body">
  <header-element></header-element> 
  <div class="container">

  <title-field class="title-field" label="Gracias"></title-field>

  <subtitle-field class="subtitle-field" label="Toda la información que nos brindaste es muy importante"></subtitle-field>

      

  <custon-button class="custon-button" label =" De nada"></custon-button>
  
  </div>
  <footer-element></footer-element>
  </div>

        `;

  style.innerHTML = `
.body {  display: flex;
  flex-direction: column;

}



  .container{
    display: flex;
    flex-direction: column;  
    gap:25px;
    margin-bottom:150px; 
  }
    
            `;
  div.append(style);
  const buttonEL = div.querySelector(".custon-button ") as any;

  buttonEL.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}

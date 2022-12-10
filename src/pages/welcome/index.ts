export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
  <div class="body">

    <header-element></header-element> 
    <div class="container">

<title-field label="Te damos la bienvenida a esta página"></title-field>

<text-custon label="Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Veniam consequuntur iure voluptas
quia accusantium voluptatum aspernatur provident el repudiandae 
quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?">
</text-custon>


<div>
<subtitle-field label ="Para continuar ingresá tu nombre"></subtitle>
</div>

<div>
<input-field label = "Nombre" id="text"></input>
</div>

<custon-button  class= "custon-button " label="Comenzar"></custon-button>
</div>

 <footer-element></footer-element>
 </div>

 `;

  const buttonEL = div.querySelector(".custon-button ") as any;
  // console.log(" este es el boton  del welcome", buttonEL);
  buttonEL.addEventListener("click", () => params.goTo("./step-1"));
  style.innerHTML = `
  .body {  display: flex;
    flex-direction: column;
  
  }
    .container{
      display: flex;
      flex-direction: column;  
      gap:25px;
      margin-bottom:1px; 
    }
      
              `;
  div.append(style);
  return div;
}

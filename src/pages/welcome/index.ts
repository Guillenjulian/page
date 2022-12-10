export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
  
    <header-element></header-element> 
<div class =" text">
<title-field label="Te damos la bienvenida a esta página"></title-field>

<text-custon label="Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Veniam consequuntur iure voluptas
quia accusantium voluptatum aspernatur provident el repudiandae 
quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?">
</text-custon>
<subtitle-field label ="Para continuar ingresá tu nombre"></subtitle>

</div>
 <section class="container">
 <div class ="container__input">
 <input-field label = "Nombre" id="text"></input>
 </div>
 <div class ="container__button">
 <custon-button  class ="button" label ="Comenzar"> Comenzar</custon-button>
 </div>
 </section>

 <footer-element></footer-element>

 `;

  const buttonEL = document.querySelector(
    ".container__button"
  ) as HTMLDivElement;
  console.log(" este es el boton", buttonEL);

  return div;
}

export function initstep1(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.innerHTML = `
  <div class="body">

  <header-element></header-element> 

  <div class="container">

  <title-field label="Necesitamos algunos datos más"></title-field>



<div>
<input-field label = "Email" id="email"></input>
</div>

<div>
<input-field label = "Comida favorita" id="text"></input>
</div>

  <custon-select label="Alguna de estas tres opciones"></custon-select>

<custon-button  class= "custon-button " label="Comenzar"></custon-button>

<componet-href class"a"  label= "volver"></componet-href>

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
  // console.log(" este es el boton  del welcome", buttonEL);
  buttonEL.addEventListener("click", () => params.goTo("./thankyou"));

  return div;
}

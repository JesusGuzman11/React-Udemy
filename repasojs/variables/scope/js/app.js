/* ---------------------------- Template Strings ---------------------------- */
const nombre = "Jesús";
const trabajo = "Desarrollador Front-End";

console.log("Nombre:" + " " + nombre + ", Trabajo:" + " " + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

/* ----------------------- Concatenar multiples lineas ---------------------- */

const contenedorApp = document.querySelector("#app")

/*let html = "<ul>" + 
              "<li> Nombre:" + " " + nombre + "</li>" +
              "<li> Trabajo:" + " " + trabajo + "</li>" +
            "</ul>";
*/
let html = `
  <ul>
    <li>Nombre: ${nombre}</li>
    <li>Trabajo: ${trabajo}</li>
  </ul>
`;
contenedorApp.innerHTML=html;
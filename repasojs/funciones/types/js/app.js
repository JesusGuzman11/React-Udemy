/* ----------------------------- Creando funcion ---------------------------- */
/* -------------------------- Function Declaration -------------------------- */
function saludar(nombre) {
  console.log("Bienvenido " + nombre);
}
saludar("Jesus");
/* --------------------------- Function Expression -------------------------- */
const cliente = function (nombreCliente) {
  console.log("Mostrando datos del cliente: " + nombreCliente);
}
cliente("Jesus");
/* ------------------------- Parametros por default ------------------------- */
/* -------------------------- Function Declaration -------------------------- */
function actividad(nombre = "Annie", actividad = "Aprender TS") {
  console.log(
    `La persona ${nombre}, esta realizando la actividad ${actividad}`
  );
}
actividad("Jesus", "Aprender React");
actividad();
/* --------------------------- Function Expression -------------------------- */
const curso = function (nombre = "Jesus", curso = "React") {
  console.log(`La persona ${nombre}, esta tomando el curso ${curso}`);
};
curso("Annie", "TS");
curso();
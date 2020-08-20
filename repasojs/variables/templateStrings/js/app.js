/* ----------------------------------- Var ---------------------------------- */
var musica = 'Rock';
if (musica) {
  var musica = 'Rap';
  console.log('Dentro de If:', musica) // Valor Rap
}
console.log(musica); // Modificado por If a Rap
/* ------------------------------- Let Y Const ------------------------------ */
let musica2 = 'Rock';
if (musica2) {
  let musica2 = 'Rap';
  console.log('Dentro de If:', musica2) // Valor Rap
}
console.log(musica2); // Sigue siendo Rock

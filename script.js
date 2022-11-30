// es una uena practica utilizar variables para escuchar al documento

const h1 = document.querySelector('h1'); // Este querySelector nos permite llamar los selectores o etiquetas, tal y como lo hace CSS.
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
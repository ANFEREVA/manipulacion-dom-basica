// es una uena practica utilizar variables para escuchar al documento

//Es una buna practica el uso de variables para escuchar el documento(es como se le llama al HTML o website)



const input = document.querySelector('#calculo');// querySelector permite "llamar" (hacer una referencia )un selector del HTML
const input1 = document.querySelector('#calculo1');
const btn = document.querySelector('#btncal');
const presult = document.querySelector('#resultado');
const form = document.getElementById('form')



form.addEventListener('click', sumarValores);

function sumarValores(event){

    event.preventDefault();
    
    let result = Number(input.value) + parseInt(input1.value);
    presult.innerHTML = 'El Resultado es: ' + result;
}






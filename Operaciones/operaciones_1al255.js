//cadena
cadena_numeros=""

function numeros(){
    for (var i=1; i<255; i++) 
    {cadena_numeros += i.toString()}
    return cadena_numeros;
} 

i = numeros();

cadena_numeros = numeros()

document.body.innerHTML = cadena_numeros

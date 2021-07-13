arreglopares=""

function numeros(){
    for (var i=0; i<=1000; i++)
    for each {arreglopares += i.toString()} 
    return arreglopares;

}

i = numeros();

arreglopares = numeros()

document.body.innerHTML = arreglopares

(numeros, function(numero){
    suma += numero;
//arreglopares=""

//function numeros(){
//    for (var i=0; i<=1000; i++)
//    {arreglopares += i.toString()} 
//    return arreglopares;

//}

//i = numeros();
//arreglopares = numeros()
//document.body.innerHTML = arreglopares

const sumaSoloPares = (numero) => {
    if (numero < 2) return 0;
    if (numero < 4) return 2;
    const numOfPares = Math.floor(numero/2);
    const min = 2;
    const max = numero%2 === 0 ? numero : numero - 1;
    const suma = ((min + max)*numOfPares)/2;
    return suma;
}


document.body.innerHTML = (sumaSoloPares(1000));

// IF

// a = 10


// function comparar_numeros(x, y){
//     if(x > y){
//         console.log(x, " es mayor")
//     }else{
//         console.log(y, " es mayor")
//     }
// }

// comparar_numeros(4 , 5)
// comparar_numeros(30 , 5)
// comparar_numeros(-4 , -5)
// comparar_numeros(8 , -5)
// comparar_numeros(6 , 25)
// comparar_numeros(8 , 50)

// FOR - Cíclicas, finita por cantidad de vueltas

// 13 / 2 = 6 y sobra 1
// 12 / 2 = 6 y sobra 0


// function mostrar_pares_en_body(){
//     var dom = document.body

//     for(var i = 0; i <= 10; i++){
//         if(i % 2 == 0){
//             dom.innerHTML += "<h1>" +  i + " es par </h1>"
//             console.log(i, " es par")
//         }
//     }
// }

// ==========================












// Crear 5 objetos de javascript que contengan la siguiente información por persona: nombre, edad y peso. 
// Crear una función que regrese el promedio de la edad y otra función que regrese el promedio del peso. 
// Al finalizar se deberá imprimir en consola dos mensajes, uno con el promedio de edad yo tro con el 
// promedio de peso.

// numeros
var a = 3
b = 5

console.log(a + b)

// cadenas 
var cadena_3 = '3'
var cadena_5 = "5"

console.log(cadena_3 + cadena_5)

// bool
var pregunta = false

console.log(pregunta)


persona5 = {}

// Esta función ahora solo recibe 1 lista
// y que devuelve el valor del promedio calculado
function promediar_edades(arreglo_personas) {

    promedio_edades = 0

    for (i = 0; i < arreglo_personas.length ; i++){
    
        promedio_edades += arreglo_personas[i].edad
    
    }
    
    promedio_edades /= arreglo_personas.length

    return promedio_edades
}

// objeto donde agrupamos datos
persona = {
    "nombre": "Marcos",
    "edad": 88,
    "peso": 70.4
}
persona2 = {
    "nombre": "Camila",
    "edad": 15,
    "peso": 45
}
persona3 = {
    "nombre": "Laura",
    "edad": 56,
    "peso": 70
}
persona4 = {
    "nombre": "Mauricio",
    "edad": 90,
    "peso": 109
}
persona5 = {
    "nombre": "Andrea",
    "edad": 32,
    "peso": 48
}
arreglo_personas = [persona, persona2, persona3, persona4, persona5]

resultado = promediar_edades(arreglo_personas)

console.log(resultado)
document.body.innerHTML = resultado









//PESO

// numeros
var a = 3
b = 5

console.log(a + b)

// cadenas 
var cadena_3 = '3'
var cadena_5 = "5"

console.log(cadena_3 + cadena_5)

// bool
var pregunta = false

console.log(pregunta)


persona5 = {}

// Esta función ahora solo recibe 1 lista
// y que devuelve el valor del promedio calculado
function promediar_edades(arreglo_personas) {

    promedio_edades = 0

    for (i = 0; i < arreglo_personas.length ; i++){
    
        promedio_edades += arreglo_personas[i].peso
    
    }
    
    promedio_edades /= arreglo_personas.length

    return promedio_edades
}

resultado = promediar_edades(arreglo_personas)

console.log(resultado)
document.body.innerHTML = resultado









//EDAD y PESO

// numeros
var a = 3
b = 5

console.log(a + b)

// cadenas 
var cadena_3 = '3'
var cadena_5 = "5"

console.log(cadena_3 + cadena_5)

// bool
var pregunta = false

console.log(pregunta)


persona5 = {}

// Esta función ahora solo recibe 1 lista
// y que devuelve el valor del promedio calculado
function promediar_edades(arreglo_personas) {

    promedio_edades = 0

    for (i = 0; i < arreglo_personas.length ; i++){
    
        promedio_edades += arreglo_personas[i].edad
    
    }
    
    promedio_edades /= arreglo_personas.length

    return promedio_edades
}

resultado = promediar_edades(arreglo_personas)

console.log(resultado)
document.body.innerHTML = resultado



//PESO

// numeros
var a = 3
b = 5

console.log(a + b)

// cadenas 
var cadena_3 = '3'
var cadena_5 = "5"

console.log(cadena_3 + cadena_5)

// bool
var pregunta = false

console.log(pregunta)


persona5 = {}

// Esta función ahora solo recibe 1 lista
// y que devuelve el valor del promedio calculado
function promediar_pesos(arreglo_personas) {

    promedio_peso = 0

    for (i = 0; i < arreglo_personas.length ; i++){
    
        promedio_peso += arreglo_personas[i].peso
    
    }
    
    promedio_peso /= arreglo_personas.length

    return promedio_peso
}

resultado1 = promediar_edades(arreglo_personas) 
resultado2 = promediar_pesos(arreglo_personas)

console.log(resultado1)
//console.log(resultado2)

document.body.innerHTML = resultado1
//document.body.innerHTML = resultado2
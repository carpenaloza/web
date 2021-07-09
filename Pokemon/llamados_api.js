function buscarPokemon(){

        nombre_pokemon = $("#txt-busqueda").val()

        fetch("https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon)
        .then(respuesta => respuesta.json())
        .then(datos => {
            nueva_etiqueta = `

            <img src="${datos.sprites.front_default}">
            `
        

            $("#btn-buscar").html(nueva_etiqueta)
        
        
        })
        .catch(error => console.log(error))



}


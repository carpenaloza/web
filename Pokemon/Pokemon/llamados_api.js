function buscarPokemon(){

        nombre_pokemon = $("#txt-busqueda").val()

        fetch("https://pokeapi.co/api/v2/pokemon-species/" + nombre_pokemon)
        .then(respuesta => respuesta.json())
        .then(datos => {
            nueva_etiqueta = `

            <img src="${datos.sprites.front_default}">
            `
            $("#nombre-pokemon").text(datos.species.name)

            $(".card-text").html(`
            <p>
            Nombre: ${datos.name}
            <br>
            N° : ${datos.id} 
            <br> 
            Altura: ${datos.height}
            <br>
            Peso: ${datos.weight}
            <br>
            Experiencia ${datos.base_experience}
            <br>
            Ataques: ${datos.moves[0].move.name}, ${datos.moves[1].move.name}, ${datos.moves[2].move.name}, ${datos.moves[3].move.name}, ${datos.moves[4].move.name}
            <br>
            Habilidades: ${datos.abilities[0].ability.name}, ${datos.abilities[1].ability.name}
            </p>
            `)

            $("#btn-buscar").html(nueva_etiqueta)
        
        
        })
        .catch(error => console.log(error))



}


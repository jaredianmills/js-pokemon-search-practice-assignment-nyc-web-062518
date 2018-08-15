document.addEventListener("DOMContentLoaded", function() {

  const searchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById("pokemon-container")

  searchInput.addEventListener("keyup", (event) => {
    const input = event.target.value
    //can also be written as const input = searchInput.value
    displayPokemon(input)
  })

  const filterPokemon = (input) => {
    let selectedPokemon = pokemonData.pokemons.filter(pokemon => pokemon.name.includes(input))
    // console.log(selectedPokemon);
    return selectedPokemon
  }

  const createPokemonElement = (input) => {
    let pokemonToDisplay = filterPokemon(input)
    pokemonToDisplay.forEach(pokemon => {
      let div = document.createElement('div')
      div.className = "pokemon-container"
      div.innerHTML = `<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${pokemon.sprites.front}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
        </div>`

      pokemonContainer.appendChild(div)
    })
  }

  const displayPokemon = (input) => {
    createPokemonElement(input)
    let pokemonDivs = pokemonContainer.children
    Array.from(pokemonDivs).forEach(div => {
      if (input === "") {
        div.remove()
      } 
    })
  }


})

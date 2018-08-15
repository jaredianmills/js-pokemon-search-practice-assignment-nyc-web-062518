document.addEventListener("DOMContentLoaded", function() {

  const searchInput = document.getElementById('pokemon-search-input')
  const pokemonContainer = document.getElementById("pokemon-container")

  searchInput.addEventListener("keyup", (event) => {
    const input = event.target.value
    //can also be written as const input = searchInput.value
    displayPokemon(input)
  })

  pokemonContainer.addEventListener("click", (event) => {
    if (event.target.innerText === "flip card") {
      let pokeImg = event.target.parentNode.querySelector("img")
      if (pokeImg.src.includes('/back/')) {
        let targetedPokemon = pokemonData.pokemons.find(poke => poke.sprites.back === pokeImg.src)
        pokeImg.src = targetedPokemon.sprites.front
      } else {
        let targetedPokemon = pokemonData.pokemons.find(poke => poke.sprites.front === pokeImg.src)
        pokeImg.src = targetedPokemon.sprites.back
      }
    }
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

        checkForDuplicates(div, pokemon)
    })
  }

  const checkForDuplicates = (div, pokemon) => {
    let pokemonDivs = pokemonContainer.children

    if (!Array.from(pokemonDivs).some(div => div.querySelector('h1').innerText === pokemon.name)) {
      pokemonContainer.appendChild(div)
    }
  }

  const displayPokemon = (input) => {
    createPokemonElement(input)
    let pokemonDivs = pokemonContainer.children
    Array.from(pokemonDivs).forEach(div => {
      // debugger
      if (input === "") {
        div.remove()
      } else if (!div.querySelector('h1').innerText.includes(input)) {
        div.remove()
      }
    })
  }


})

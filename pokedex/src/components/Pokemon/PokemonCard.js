import axios from 'axios'
import React, {useEffect} from 'react'

const PokemonCard = ({pokemonList}) => {

  const getIDFromPokemon = (pokemon) => {
    return pokemon.url.replace(
      "https://pokeapi.co/api/v2/pokemon/", ""
    ).replace("/", "")
  }

  return (
    pokemonList.map((pokemon) => {
      return (
        <div className=''>
          <li key={pokemon.name}>{pokemon.name}</li>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIDFromPokemon(pokemon)}.png`}></img>
        </div>
      )
    })
  )
}

export default PokemonCard


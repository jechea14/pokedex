import React, {useState} from 'react'

const SearchBar = ({ pokemon }) => {

  const [searchValue, setSearchValue] = useState("")

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const filterPokemon = pokemon.filter((poke) => {
    return poke.name.includes(searchValue)
  })

  const getIDFromPokemon = (pokemon) => {
    return pokemon.url.replace(
      "https://pokeapi.co/api/v2/pokemon/", ""
    ).replace("/", "")
  }


  return (
    <div className='text-center'>
      <input type='text' placeholder='Search Pokemon' value={searchValue} onChange={handleInputChange} className='border-solid border-2 rounded-xl placeholder:italic'/>
      <div className='flex flex-wrap justify-center'>
        {filterPokemon.map((poke) => {
          return (
            <div className='border rounded-2xl m-2 p-2 bg-slate-300'>
              <div key={poke.name}>{poke.name}</div>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIDFromPokemon(poke)}.png`}></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchBar
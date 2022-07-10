import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from './components/Pokemon/PokemonCard'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  const [pokeList, setPokeList] = useState([])
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'

  useEffect(() => {
    const fetchItems = async () => {
      const pokeResult = await axios(URL)
      setPokeList(pokeResult.data.results)
    }

    fetchItems()
  }, [])


  console.log(pokeList)

  return (
    <div className="App mt-3">
      <SearchBar pokemon={pokeList} />
      {/* <PokemonCard pokemonList={pokeList}/> */}
    </div>
  );
}

export default App;

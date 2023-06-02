/* eslint-disable react/jsx-no-target-blank */

import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState, useEffect } from "react";
import Navbar from './components/Navbar'


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
]

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  useEffect(() => {
    alert(`Welcome young dressor`)
  }, [])

  return (
    <>
      <h1>Attrapez les tous !</h1>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Navbar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
    </>
  );
}

export default App;
  

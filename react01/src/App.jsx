/* eslint-disable react/jsx-no-target-blank */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";
import Navbar from './components/Navbar'



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [pokemonList, setPokemonList] = useState([
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
  ]);


  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
    
  };

  
  

  return (
    <>
      <h1>Attrapez les tous !</h1>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Navbar pokemonList={pokemonList} handlePokemonClick={handlePokemonClick} />
    </>
  );
}

export default App;
  

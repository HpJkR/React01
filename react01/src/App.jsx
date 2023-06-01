/* eslint-disable react/jsx-no-target-blank */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";

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
  ];


function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const handleClickBack = () => {
    if (pokemonIndex > 0){
    setPokemonIndex(pokemonIndex - 1)}
  }
  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1){
    setPokemonIndex(pokemonIndex + 1)} 
  }


  return (
    <>
      <h1>Attrapez les tous !</h1>
      <div className="card">
      <PokemonCard pokemon = {pokemonList[pokemonIndex]}/>
      </div>
      {pokemonIndex > 0 ? <button onClick={handleClickBack}>Previous</button> : <p></p> }
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Next</button> : <p></p>}
    </>
  )
}
  
export default App;

/* eslint-disable react/jsx-no-target-blank */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

// Déclaration d'un tableau contenant des objets Pokémon
const pokemonList = [
  {
    name: "bulbasaur", // Nom du premier Pokémon
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", // URL de l'image du premier Pokémon
  },
  {
    name: "mew", // Nom du deuxième Pokémon
  },
];
  return (
    <>
      <h1>Attrapez les tous !</h1>
      <div className="card">
      <PokemonCard pokemon = {pokemonList[0]}/>
      </div>
    </>
  )
  }

export default App;

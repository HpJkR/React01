/* eslint-disable react/jsx-no-target-blank */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useState } from "react";
import { useEffect } from 'react';
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
  ];


  function App() {
    useEffect(

      () =>  {
        alert("hello pokemon trainer :)");
       
      }, 
      []
   );
    
    // Utilisation du hook useState pour gérer l'index du Pokémon actuellement affiché
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    // Gestionnaire d'événement pour le bouton "Previous"
    const handleClickBack = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1);
       
      }
    };
  
    // Gestionnaire d'événement pour le bouton "Next"
    const handleClickNext = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setPokemonIndex(pokemonIndex + 1);
       
      }
    };

    useEffect(() => {
      if (pokemonList[pokemonIndex].name === 'pikachu') {
        const delay = 100; // Délai de 0,1 secondes (100 millisecondes)
        const timeoutId = setTimeout(() => {
          alert('pika pikachu !!!');
        }, delay);
  
        return () => {
          clearTimeout(timeoutId); // Nettoie le timeout lorsque le composant est démonté ou lorsque l'index change
        };
      }
    }, [pokemonIndex]);

    return (
      <>
        {/* Titre de l'application */}
        <h1>Attrapez les tous !</h1>
        
        {/* Affichage du Pokémon actuellement sélectionné */}
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        
        {/* Composant Navbar pour la navigation */}
        <Navbar
          pokemonIndex={pokemonIndex}
          handleClickBack={handleClickBack}
          handleClickNext={handleClickNext}
          pokemonList={pokemonList}
        />
      </>
    );
  }
  
  export default App;
  

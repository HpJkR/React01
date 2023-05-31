/* eslint-disable react/prop-types */
import PropTypes from "prop-types"; 

  // Définition du composant PokémonCard
  const PokemonCard = (props) => {
    
    // Retourne un élément figure contenant le nom et l'image du Pokémon
    return (
      <figure>
        {props.pokemon.imgSrc != undefined ? ( // Vérifie si l'URL de l'image est définie
          <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> // Affiche l'image du Pokémon avec son nom en tant qu'attribut alt
        ) : (
          <p>???</p> // Affiche "???" si l'URL de l'image n'est pas définie
        )}
        <figcaption>{props.pokemon.name}</figcaption> 
      </figure> // Affiche le nom du Pokémon
    );
  }

  PokemonCard.propTypes = {
    props: PropTypes.shape({
     name: PropTypes.string.isRequired,
     imgSrc: PropTypes.string,
    }).isRequired,
  }
  
  export default PokemonCard; // Exporte le composant PokémonCard pour pouvoir l'utiliser dans d'autres modules
  



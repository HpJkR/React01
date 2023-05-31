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
  
  // Définition du composant PokémonCard
  function PokemonCard() {
    const pokemon = pokemonList[1]; // Sélection du deuxième Pokémon dans la liste
  
    // Retourne un élément figure contenant le nom et l'image du Pokémon
    return (
      <figure>
        {pokemon.imgSrc != undefined ? ( // Vérifie si l'URL de l'image est définie
          <img src={pokemon.imgSrc} alt={pokemon.name} /> // Affiche l'image du Pokémon avec son nom en tant qu'attribut alt
        ) : (
          <p>???</p> // Affiche "???" si l'URL de l'image n'est pas définie
        )}
        <figcaption>{pokemon.name}</figcaption> 
      </figure> // Affiche le nom du Pokémon
    );
  }
  
  export default PokemonCard; // Exporte le composant PokémonCard pour pouvoir l'utiliser dans d'autres modules
  



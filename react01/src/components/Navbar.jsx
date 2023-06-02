const Navbar = ({ pokemonIndex, setPokemonIndex, pokemonList}) => {
  
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => {setPokemonIndex((index))}}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
};

export default Navbar;





const Navbar = (props) => {
  // Extraction des valeurs des props
  const { pokemonIndex, handleClickBack, handleClickNext, pokemonList } = props;

  return (
    <>
      {/* Vérifie si pokemonIndex est supérieur à 0 */}
      {/* Si oui, affiche un bouton "Previous" avec handleClickBack comme gestionnaire d'événement */}
      {/* Sinon, affiche un élément <p> vide */}
      {pokemonIndex > 0 ? (
        <button onClick={handleClickBack}>Previous</button>
      ) : (
        <p></p>
      )}

      {/* Vérifie si pokemonIndex est inférieur à la longueur de pokemonList - 1 */}
      {/* Si oui, affiche un bouton "Next" avec handleClickNext comme gestionnaire d'événement */}
      {/* Sinon, affiche un élément <p> vide */}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Next</button>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Navbar;

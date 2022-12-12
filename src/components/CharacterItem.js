const CharacterItem = ({ character }) => {
  return (
    <li>
      <h2>{character.name}</h2>
      <h3>{character.species}</h3>
      <img src={character.image} alt={character.name} title={`Photo of ${character.name}`} />
    </li>
  );
};

export { CharacterItem };

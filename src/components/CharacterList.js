import { CharacterItem } from './CharacterItem';

const CharacterList = ({ characters }) => {
  const CharacterElement = characters.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });

  return (
    <section>
      <ul>{CharacterElement}</ul>;
    </section>
  );
};

export { CharacterList };

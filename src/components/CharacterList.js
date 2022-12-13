import { CharacterItem } from './CharacterItem';

const CharacterList = ({ characters }) => {
  const characterElement = characters.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });

  return (
    <section>
      <ul className='main__content'>{characterElement}</ul>;
    </section>
  );
};

export { CharacterList };

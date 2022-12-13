import { CharacterItem } from './CharacterItem';

const CharacterList = ({ characters }) => {
  const CharacterElement = characters.map((character) => {
    return <CharacterItem key={character.id} character={character} />;
  });

  return (
    <main className='main'>
      <section>
        <ul className='main__content'>{CharacterElement}</ul>;
      </section>
    </main>
  );
};

export { CharacterList };

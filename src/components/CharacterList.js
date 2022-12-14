import { CharacterItem } from './CharacterItem';

const CharacterList = (props) => {
  const renderResults = () => {
    if (props.characters.length > 0) {
      return props.characters.map((character) => {
        return <CharacterItem key={character.id} character={character} />;
      });
    } else {
      return <h2 className='message'>There are no results that match your search</h2>;
    }
  };

  return (
    <section>
      <ul className='main__content'>{renderResults()}</ul>;
    </section>
  );
};

export { CharacterList };

import { Link } from 'react-router-dom';

const CharacterItem = ({ character }) => {
  return (
    <li className='main__content-list'>
      <Link to={`/character/${character.id}`}>
        <article className='main__content-article'>
          <h2>{character.name}</h2>
          <div className='main__content-image-container'>
            <img
              className='main__content-image-characters'
              src={character.image}
              alt={character.name}
              title={`Photo of ${character.name}`}
            />
          </div>
          <h3 className='main__content-article-species'>{character.species}</h3>
        </article>
      </Link>
    </li>
  );
};

export { CharacterItem };

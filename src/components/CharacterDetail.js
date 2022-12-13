import { Link, useParams } from 'react-router-dom';

const CharacterDetail = (props) => {
  const params = useParams();
  const characterSelected = props.findCharacter(params.id);

  return (
    <>
      <h1 className='main__content-title'>Character Details</h1>
      <li className='main__content__selected-list'>
        <article className='main__content__selected-article'>
          <h2>{characterSelected.name}</h2>
          <div className='main__content__selected-image-container'>
            <img
              className='main__content__selected-image-characters'
              src={characterSelected.image}
              alt={characterSelected.name}
              title={`Photo of ${characterSelected.name}`}
            />
          </div>
          <p className='main__content__selected-species-'>{characterSelected.species}</p>
          <p>{characterSelected.origin}</p>
          <p>{characterSelected.status}</p>
          <p>Appears in {characterSelected.episode} episodes</p>
        </article>
        <Link to='/'>Go back </Link>
      </li>
    </>
  );
};

export { CharacterDetail };

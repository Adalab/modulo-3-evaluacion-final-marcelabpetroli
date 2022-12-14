import '../styles/components/CharacterDetail.scss';
import { Link, useParams } from 'react-router-dom';

const CharacterDetail = (props) => {
  const params = useParams();
  const characterSelected = props.findCharacter(params.id);

  const renderDetails = () => {
    if (characterSelected !== undefined) {
      return (
        <section className='details'>
          <h1 className='details__title'>Character Details</h1>
          <li className='details__list'>
            <article className='details__article'>
              <h2 className='details__name'>{characterSelected.name}</h2>
              <div className='details__container'>
                <div className='main__content-image-container'>
                  <img
                    className='main__content-image-characters'
                    src={characterSelected.image}
                    alt={characterSelected.name}
                    title={`Photo of ${characterSelected.name}`}
                  />
                </div>
                <p className='details__sub'>Species: {characterSelected.species}</p>
                <p className='details__sub'>Origin: {characterSelected.origin}</p>
                <p className='details__sub'>Status: {characterSelected.status}</p>
                <p className='details__sub'>Appears in {characterSelected.episode} episodes</p>
              </div>
            </article>
            <Link className='details__link' to='/'>
              Go back
            </Link>
          </li>
        </section>
      );
    } else {
      <h2 className='not__found'>Page not found</h2>;
    }
  };

  return <>{renderDetails()}</>;
};

export { CharacterDetail };

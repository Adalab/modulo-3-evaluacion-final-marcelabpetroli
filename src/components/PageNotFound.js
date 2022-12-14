import '../styles/components/PageNotFound.scss';
import { Link } from 'react-router-dom';
import photoNotFound from '../images/rick-morty-2.webp';

const PageNotFound = () => {
  return (
    <section className='not__found'>
      <img className='not__found-image' src={photoNotFound} alt='Morty' title='Morty' />
      <h2 className='not__found-title'>ERROR 404 - Page not found</h2>

      <Link className='not__found-link' to={'/'}>
        <p>Go back to main page</p>
      </Link>
    </section>
  );
};
export { PageNotFound };

import rickMorty from '../images/rick-morty-3.gif';

const Header = () => {
  return (
    <div className='header'>
      <img src={rickMorty} alt='Rick and Morty' title='Rick and Morty' className='header__image' />
      <h1 className='header__title'>
        “There’s a lesson here, and I’m not going to be the one to figure it out.”<i> — Rick</i>
      </h1>
    </div>
  );
};

export { Header };

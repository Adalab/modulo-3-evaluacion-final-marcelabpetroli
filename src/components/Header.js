import rickMorty from '../images/rick-and-morty.gif';

const Header = () => {
  return (
    <div className='header'>
      <img src={rickMorty} alt='Gif Rick and Morty' title='Gif Rick and Morty' className='header__image' />
      <h1>“Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.” — Morty</h1>
    </div>
  );
};

export { Header };

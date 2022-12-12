import '../styles/App.scss';
// services
import { getDataApi } from '../services/api';
// hooks
import { useState, useEffect } from 'react';
// components
import { Header } from './Header';
import { Filters } from './Filters';
import { CharacterList } from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className='page'>
      <Header />

      <Filters />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;

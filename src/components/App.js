import '../styles/App.scss';
// services
import { getDataApi } from '../services/api';
// hooks
import { useState, useEffect } from 'react';
// components
import { Header } from './Header';
import { Filters } from './Filters';
import { CharacterList } from './CharacterList';
import { CharacterDetail } from './CharacterDetail';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const charactersFiltered = characters
    .filter((character) => character.name.toLowerCase().includes(searchName.toLowerCase()))
    .sort((a, b) => {
      var nameA = a.name.first;
      var nameB = b.name.first;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

  const handleFilterName = (value) => {
    setSearchName(value);
  };

  const findCharacter = (id) => {
    return characters.find((character) => parseInt(character.id) === parseInt(id));
  };

  return (
    <>
      <Header />

      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <section>
                <Filters handleFilterName={handleFilterName} searchName={searchName} />
                <CharacterList characters={charactersFiltered} />
              </section>
            }
          />

          <Route path='/character/:id' element={<CharacterDetail findCharacter={findCharacter} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

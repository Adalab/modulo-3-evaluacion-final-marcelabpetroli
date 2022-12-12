const getDataApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          name: character.name,
          species: character.species,
          image: character.image,
        };
      });
      return cleanData;
    });
};

export { getDataApi };

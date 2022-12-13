const getDataApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.image,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          episode: character.episode.length,
        };
      });
      return cleanData;
    });
};

export { getDataApi };

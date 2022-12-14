const FilterBySpecies = (props) => {
  const handleSelect = (ev) => {
    props.handleFilterSpecies(ev.target.value);
  };

  return (
    <fieldset className='search__fieldset'>
      <label className='search__label' htmlFor='species'>
        Species
      </label>
      <select className='search__input' name='species' id='species' onChange={handleSelect} value={props.searchSpecies}>
        <option value='all'>choose</option>
        <option value='human'>human</option>
        <option value='alien'>alien</option>
      </select>
    </fieldset>
  );
};

export { FilterBySpecies };

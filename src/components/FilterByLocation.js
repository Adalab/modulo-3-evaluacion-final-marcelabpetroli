const FilterByLocation = (props) => {
  const handleInput = (ev) => {
    props.handleFilterLocation(ev.target.value);
  };

  return (
    <fieldset className='search__fieldset'>
      <label className='search__label' htmlFor='location'>
        Location:
      </label>
      <input
        className='search__input'
        type='text'
        name='location'
        id='location'
        placeholder='Ex: Earth (C-137)'
        onInput={handleInput}
        value={props.searchLocation}
      />
    </fieldset>
  );
};

export { FilterByLocation };

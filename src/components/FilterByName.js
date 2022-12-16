import '../styles/components/FilterByName.scss';

const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  return (
    <fieldset className='search__fieldset'>
      <label className='search__label' htmlFor='name'>
        Search:
      </label>
      <input
        className='search__input'
        type='text'
        name='name'
        id='name'
        placeholder='Ex: Alien Rick'
        onInput={handleInput}
        value={props.searchName}
      />
    </fieldset>
  );
};

export { FilterByName };

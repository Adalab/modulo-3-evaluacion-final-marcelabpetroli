import '../styles/components/FilterByName.scss';

const FilterByName = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  return (
    <section className='search'>
      {/* From: https://codepen.io/wheresdara/pen/wvXBpwa */}
      <div className='search__stars'></div>
      {/* From: https://codepen.io/wheresdara/pen/wvXBpwa */}
      <form className='search__form'>
        <label className='search__label' htmlFor='name'>
          Search
        </label>
        <input className='search__input' type='text' name='name' id='name' placeholder='Ex: Alien Rick' onInput={handleInput} />
      </form>
    </section>
  );
};

export { FilterByName };

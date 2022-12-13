const FilterByName = () => {
  return (
    <section className='search'>
      <form className='search__form'>
        <label className='search__label' htmlFor='name'>
          Search
        </label>
        <input className='search__input' type='text' name='name' id='name' placeholder='Alien Rick' />
      </form>
    </section>
  );
};

export { FilterByName };

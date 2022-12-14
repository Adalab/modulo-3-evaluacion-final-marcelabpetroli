import { FilterByName } from './FilterByName';
import { FilterBySpecies } from './FilterBySpecies';

const Filters = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className='search'>
      {/* From: https://codepen.io/wheresdara/pen/wvXBpwa */}
      <div className='search__stars'></div>
      {/* From: https://codepen.io/wheresdara/pen/wvXBpwa */}
      <form className='search__form' onSubmit={handleForm}>
        <FilterByName searchName={props.searchName} handleFilterName={props.handleFilterName} />
        <FilterBySpecies searchSpecies={props.searchSpecies} handleFilterSpecies={props.handleFilterSpecies} />
      </form>
    </section>
  );
};

export { Filters };

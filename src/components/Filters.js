import { FilterByName } from './FilterByName';
import { FilterBySpecies } from './FilterBySpecies';
import { FilterByLocation } from './FilterByLocation';

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
        <FilterByLocation searchLocation={props.searchLocation} handleFilterLocation={props.handleFilterLocation} />
      </form>
    </section>
  );
};

export { Filters };

import { FilterByName } from './FilterByName';

const Filters = (props) => {
  return <FilterByName handleFilterName={props.handleFilterName} searchName={props.searchName} />;
};

export { Filters };

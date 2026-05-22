import { FilterInput, Label } from "./Filter.styled.js";

export const Filter = ({ filter, setFilter }) => {
  return (
    <Label>
      Finding contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </Label>
  );
};

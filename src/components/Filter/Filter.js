import { useContacts } from "../ContactsContext/ContactsContext.js";
import { FilterInput, Label } from "./Filter.styled.js";

export const Filter = () => {
  const { filter, setFilter } = useContacts();

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

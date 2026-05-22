import { ContactItem } from "../ContactItem/ContactItem.js";

import { List } from "./ContactList.styled.js";

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <List>
      {filtered.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </List>
  );
};

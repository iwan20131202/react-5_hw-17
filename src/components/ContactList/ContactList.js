import { useContacts } from "../ContactsContext/ContactsContext.js";
import { ContactItem } from "../ContactItem/ContactItem.js";
import { List } from "./ContactList.styled.js";

export const ContactList = () => {
  const { contacts, filter } = useContacts();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <List>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

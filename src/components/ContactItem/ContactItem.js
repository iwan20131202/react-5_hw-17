import { useContacts } from "../ContactsContext/ContactsContext.js";
import { Row, Button } from "./ContactItem.styled.js";
import { TiDeleteOutline } from "react-icons/ti";

export const ContactItem = ({ contact }) => {
  const { deleteContact } = useContacts();

  return (
    <Row>
      {contact.name}: {contact.number}
      <Button onClick={() => deleteContact(contact.id)}>
        Delete <TiDeleteOutline />
      </Button>
    </Row>
  );
};

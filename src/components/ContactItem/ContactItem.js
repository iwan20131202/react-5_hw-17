import { Row, Button } from "./ContactItem.styled.js";

import { TiDeleteOutline } from "react-icons/ti";

export const ContactItem = ({ contact, onDelete }) => {
  return (
    <Row>
      {contact.name}: {contact.number}
      <Button onClick={() => onDelete(contact.id)}>
        Delete <TiDeleteOutline />
      </Button>
    </Row>
  );
};

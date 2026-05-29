import { useState, useRef } from "react";
import { useContacts } from "../ContactsContext/ContactsContext.js";
import { Form, Label, Input, Button } from "./ContactForm.styled.js";
import { IoPersonAddOutline } from "react-icons/io5";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputRef = useRef(null);
  const { addContact } = useContacts();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isSuccess = addContact(name, number);

    if (isSuccess) {
      setName("");
      setNumber("");
      nameInputRef.current?.focus();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          ref={nameInputRef}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </Label>

      <Button type="submit">
        Add contact <IoPersonAddOutline />
      </Button>
    </Form>
  );
};

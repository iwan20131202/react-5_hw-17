import { useState } from "react";
import { nanoid } from "nanoid";

import { Form, Label, Input, Button } from "./ContactForm.styled.js";

import { IoPersonAddOutline } from "react-icons/io5";

export const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (exists) {
      alert("Контакт вже існує!");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prev) => [newContact, ...prev]);

    setName("");
    setNumber("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
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

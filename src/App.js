import "./App.css";

import { useState, useEffect } from "react";

import { ContactForm } from "./components/ContactForm/ContactForm.js";
import { ContactList } from "./components/ContactList/ContactList.js";
import { Filter } from "./components/Filter/Filter.js";

import { AppWrapper, Title, Subtitle } from "./App.styled.js";

import { FaSquarePhone } from "react-icons/fa6";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    setContacts((previous) => previous.filter((contact) => contact.id !== id));
  };

  return (
    <AppWrapper>
      <Title>
        Phonebook <FaSquarePhone />
      </Title>

      <ContactForm contacts={contacts} setContacts={setContacts} />

      <Subtitle>Contacts</Subtitle>

      <Filter filter={filter} setFilter={setFilter} />

      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={deleteContact}
      />
    </AppWrapper>
  );
}

export default App;

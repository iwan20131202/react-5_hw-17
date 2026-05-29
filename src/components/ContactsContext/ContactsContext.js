import { createContext, useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const exists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (exists) {
      alert(`${name} вже є у контактах!`);
      return false;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [newContact, ...prev]);
    return true;
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, filter, setFilter, addContact, deleteContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);

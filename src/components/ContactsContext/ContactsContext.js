import { createContext, useContext, useReducer, useEffect } from "react";
import { nanoid } from "nanoid";

const ContactsContext = createContext();

const init = () => {
  const savedContacts = localStorage.getItem("contacts");
  const savedFilter = localStorage.getItem("filter");

  return {
    contacts: savedContacts ? JSON.parse(savedContacts) : [],
    filter: savedFilter ? JSON.parse(savedFilter) : "",
  };
};

function contactsReducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, null, init);
  const { contacts, filter } = state;

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
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    return true;
  };

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  const setFilter = (value) => {
    dispatch({ type: "SET_FILTER", payload: value });
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        filter,
        setFilter,
        addContact,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error(
      "useContacts має використовуватись всередині ContactsProvider",
    );
  }
  return context;
};

import "./App.css";
import { ContactsProvider } from "./components/ContactsContext/ContactsContext.js";
import { ContactForm } from "./components/ContactForm/ContactForm.js";
import { ContactList } from "./components/ContactList/ContactList.js";
import { Filter } from "./components/Filter/Filter.js";
import { AppWrapper, Title, Subtitle } from "./App.styled.js";
import { FaSquarePhone } from "react-icons/fa6";

function App() {
  return (
    <ContactsProvider>
      <AppWrapper>
        <Title>
          Phonebook <FaSquarePhone />
        </Title>

        <ContactForm />

        <Subtitle>Contacts</Subtitle>

        <Filter />

        <ContactList />
      </AppWrapper>
    </ContactsProvider>
  );
}

export default App;

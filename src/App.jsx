import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import css from "./App.module.css"
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

function App() {

 const contactsArr = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
  const [contacts, setContacts] = useState(contactsArr)
  const [searchBoxValue, setSearchBoxValue] = useState("")
 

const formValues = (newContact) => {
  setContacts((prevContacts) => {
    return [
      ...prevContacts,
      {
        id: nanoid(),
        ...newContact
      }
    ];
  });
};
  

  const deleteUser = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contacts => contacts.id !== contactId));
  }

   useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
   }, [contacts])
  
  
  const filteredUsers = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchBoxValue.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddNewContact={formValues} />
      <SearchBox onFilter={setSearchBoxValue} value={searchBoxValue} />
      <ContactList contacts={filteredUsers} onDeleteContact={deleteUser} />
    </div>
  )
}

export default App

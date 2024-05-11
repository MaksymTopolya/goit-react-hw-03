import { useState } from 'react'
import css from "./App.module.css"
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

function App() {

 const usersArr = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
  const [users, setUsers] = useState(usersArr)
  const [searchBoxValue, setSearchBoxValue] = useState("")
 

const formValues = (newUser) => {
  setUsers((prevUsers) => {
    const lastUserId = prevUsers.length > 0 ? prevUsers[prevUsers.length - 1].id : 'id-1';
    const [prefix, num] = lastUserId.split("-");
    const newId = `${prefix}-${Number(num) + 1}`;

    return [
      ...prevUsers,
      {
        id: newId,
        ...newUser
      }
    ];
  });
};

  
  const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }
  
  const onSearchBoxValue = (value) => {
    setSearchBoxValue(value)
  }
  
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddNewUser={formValues} />
      <SearchBox users={users} valueInField={onSearchBoxValue} />
      <ContactList allUsers={users} searchBoxValue={searchBoxValue} onDeleteUser={deleteUser  } />
    </div>
  )
}

export default App

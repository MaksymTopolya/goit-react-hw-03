import { useState } from 'react'
import { nanoid } from 'nanoid'
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
    return [
      ...prevUsers,
      {
        id: nanoid(),
        ...newUser
      }
    ];
  });
};
  

  const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  }
  
  // const onSearchBoxValue = (value) => {
  //   setSearchBoxValue(value)
  // }


  const filteredUsers = () => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchBoxValue.toLowerCase())
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddNewUser={formValues} />
      <SearchBox onFilter={setSearchBoxValue} value={searchBoxValue} />
      <ContactList allUsers={filteredUsers} onDeleteUser={deleteUser} />
    </div>
  )
}

export default App

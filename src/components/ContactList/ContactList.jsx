import css from "./ContactList.module.css";
import { HiMiniUserCircle, HiMiniPhone } from "react-icons/hi2";

export default function ContactList({ allUsers, searchBoxValue, onDeleteUser}) {

    const handleClick = (event) => {
        const userId = event.currentTarget.parentNode.getAttribute("data-id");
        onDeleteUser(userId)
    }

  
    return ( 
        <div className={css.container}>
            <ul className={css.list}>
                     {allUsers.filter((user) => user.name.includes(searchBoxValue)).map((filteredUser) => ( 
                          <li key={filteredUser.id} className={css.item} data-id={filteredUser.id}> 
                            <h3 className={css.title}><HiMiniUserCircle /> {filteredUser.name}</h3>
                            <h3 className={css.title}><HiMiniPhone/> {filteredUser.number}</h3>
                            <button onClick={handleClick}>Delete</button>
                          </li>
                      ))}
            </ul>
        </div>
    );
}

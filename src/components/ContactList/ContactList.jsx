
import Contacts from "../Contacts/Contacts"; // Ensure this path is correct
import css from "./ContactList.module.css";

export default function ContactList({ allUsers, onDeleteUser }) {
    return (
            <ul className={css.list}>
                {allUsers().map((user) => (
                    <li key={user.id} className={css.item}>
                        <Contacts data={user} onDeleteUser={onDeleteUser} />
                    </li>
                    
                ))}
            </ul>
    );
}

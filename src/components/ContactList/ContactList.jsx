
import Contact from "../Contact/Contact"; // Ensure this path is correct
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
    return (
            <ul className={css.list}>
                {contacts().map((user) => (
                    <li key={user.id} className={css.item}>
                        <Contact data={user} onDeleteContact={onDeleteContact} />
                    </li>
                    
                ))}
            </ul>
    );
}

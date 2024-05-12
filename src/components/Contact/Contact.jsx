import { HiMiniUserCircle, HiMiniPhone } from "react-icons/hi2";
export default function Contact({ data, onDeleteContact }) {
    return (
        <>
            <h3><HiMiniUserCircle /> {data.name}</h3>
            <h3><HiMiniPhone/> {data.number}</h3>
            <button onClick={()=>{onDeleteContact(data.id)}}>Delete</button>
        </>
    )
}
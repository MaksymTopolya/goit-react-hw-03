import { HiMiniUserCircle, HiMiniPhone } from "react-icons/hi2";
export default function Contacts({ data, onDeleteUser }) {
    return (
        <>
            <h3><HiMiniUserCircle /> {data.name}</h3>
            <h3><HiMiniPhone/> {data.number}</h3>
            <button onClick={()=>{onDeleteUser(data.id)}}>Delete</button>
        </>
    )
}
import { useContext, useState } from "react"
import { Info } from "./ShowInfo";

const Update = () => {
    const {updateUser} = useContext(Info);
    const [field, setField] = useState('avt');
    const [content, setContent]  = useState("Enter image address");
    const [val, setVal]  = useState('');

    return (
        <div>
            <select onChange={(e) => {
                let s = "Enter ";

                if (e.target.value == 'avt') s += "image address";
                else s += e.target.value;
            
                setField(e.target.value);
                setContent(s);
                setVal('');
            }}>
                <option value="avt">Avatar</option>  
                <option value="name">User Name</option>
                <option value="age">Age</option>
                <option value="rating">Rating</option>
            </select>

            <input 
                type="text"
                placeholder={content}
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />

            <button onClick={() => updateUser(field, val)}>Update</button>
        </div>
    )
}

export default Update
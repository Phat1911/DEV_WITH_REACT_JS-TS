import { useContext, useState } from "react"
import { FriendList } from "./ShowFriendList"

const UpdateFriend = () => {
    const {state, change} = useContext(FriendList);
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');

    return (
        <div>
            <table>
                <tr>
                    <th><button style={{width: '100%'}} onClick={() => change(0, name)}>Add</button></th>
                    <td>
                        <input 
                        type="text" 
                        placeholder="Enter your friend name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        
                        <span style={{color: 'red', display: state}}>This name is invalid, try again!</span>
                    </td>
                </tr>

                <tr>
                    <th><button onClick={() => change(1, name1)}>Delete</button></th>
                    <td>
                        <input 
                        type="text" 
                        placeholder="Enter your friend name"
                        value={name1}
                        onChange={(e) => setName1(e.target.value)}
                        />                        
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default UpdateFriend;
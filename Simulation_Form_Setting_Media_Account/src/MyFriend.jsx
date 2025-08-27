import { useState } from "react";

const FriendList = ( {friends} ) => {
    return (<section>
        <h1>My Friend:</h1>
        <ul>
            { 
                friends.map((f, id) => (
                    <li key={id}>{f}</li>
                )) 
            }
        </ul>
    </section>);
}

const Add = ( {friends, setFriend, inp, setInp} ) => {
    const handle = () => {
        if (inp.trim() === "") return;

        const arr = [...friends];
        if (!friends.some((f) => f.toLowerCase() == inp.toLowerCase())) arr.push(inp);

        setFriend(arr);
    }
    return (
        <div>
            <input 
                type="text"
                placeholder="Enter your friend name"
                onChange={(e) => setInp(e.target.value)}
            />
            <button onClick={handle}>add</button>
        </div>
    )
}

const Delete = ({friends, setFriend, del, setDel}) => {
    const handle = () => {
        setFriend(friends.filter((f) => f.toLowerCase() !== del.toLowerCase()));
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="Enter your friend name"
                onChange={(e) => setDel(e.target.value)}
            />

            <button onClick={handle}>delete</button>
        </div>
    )
}

const MyFriend = () => {
    const [friends, setFriend] = useState(['Phat', 'Bu']);
    const [inp, setInp] = useState('');
    const [del, setDel] = useState('');

    return (
        <div>
            <FriendList friends={friends}/>
            <Add friends={friends} setFriend={setFriend} inp={inp} setInp={setInp}/>
            <Delete friends={friends} setFriend={setFriend} del={del} setDel={setDel}/>
        </div>
    );
}

export default MyFriend
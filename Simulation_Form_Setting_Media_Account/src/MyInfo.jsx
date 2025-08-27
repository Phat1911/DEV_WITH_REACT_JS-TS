import { useState } from "react"

const ExposeInfo = ({avt, name, age, rating}) => {
    return <div>
        <h1>My Info:</h1>
        <img src={avt} alt="Your Avt is not available" width={300}/>
        <ul>
            <li>User Name: {name}</li>
            <li>Age: {age}</li> 
            <li>Rating: {rating}</li>
        </ul>
    </div>
}

const ChangeInfo = ({person, setPerson, Key, setKey, val, setVal, content, setContent}) => {
    const handle = () => {
        if (val.trim() === "") return;
        setPerson({
            ...person,
            [Key]: val,
        });
    };

    return <div>
        <select name="" id="" onChange={(e) => {
            if (e.target.value === "avt") setContent("Enter image address");
            else setContent(`Enter your ${e.target.value}`);
            setKey(e.target.value)
        }}>
            <option value="avt">Avt</option>
            <option value="name">User Name</option>
            <option value="age">Age</option>
            <option value="rating">Rating</option>
        </select>

        <input 
            type="text"
            placeholder={content}
            onChange={(e) => setVal(e.target.value)}
        />

        <button onClick={handle}>Change</button>
    </div>
}

const MyInfo = () => {
    const [key, setKey] = useState('avt');
    const [content, setContent] = useState("Enter image address");
    const [val, setVal] = useState('');
    const [person, setPerson] = useState({
        avt: 'https://avatars.githubusercontent.com/u/139056014?s=400&u=4046e73869fe364f847aa8e10af70b0a153596d9&v=4',
        name: 'Phat',
        age: 17,
        rating: 19,
    });

    return (
        <div>
            <ExposeInfo 
                avt = {person.avt}
                name = {person.name}
                age = {person.age}
                rating = {person.rating}
            />

            <ChangeInfo 
                person={person}
                setPerson={setPerson}
                Key={key}
                setKey={setKey}
                val={val}
                setVal={setVal}
                content={content}
                setContent={setContent}
            />
        </div>
    )
}

export default MyInfo
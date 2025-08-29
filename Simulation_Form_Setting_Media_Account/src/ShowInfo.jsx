import { createContext, useState } from "react"

const Info = createContext();

const ShowInfo = ({ children }) => {
    const [user, setUser] = useState({
        avt: 'https://avatars.githubusercontent.com/u/139056014?s=400&u=4046e73869fe364f847aa8e10af70b0a153596d9&v=4',
        name: 'Phat',
        age: 17,
        rating: 19,
    });

    const updateUser = (field, val) => {
        setUser({...user, [field]: val});
    }

    return (
        <Info.Provider value={{user, updateUser}}>
            <h1>My Info:</h1>
            <img src={user.avt} alt="Your avatar is not available" width={300} />
            <ul>
                <li>User name: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Rating: {user.rating}</li> 
            </ul>

            {children}
        </Info.Provider>
    )
}

export {ShowInfo, Info}
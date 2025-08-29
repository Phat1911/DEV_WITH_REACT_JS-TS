import { createContext, useEffect, useState } from "react"

const FriendList = createContext();

const ShowFriendList = ({ children }) => {
    const [frList, setList] = useState(['Phat', 'Bu']);
    const [state, setState] = useState('none');

    const change = (type, val) => {
        // 0: add, 1: del
        if (val.trim() === "") return;

        if (!type) {
            if (!frList.some((fr) => fr.toLowerCase() === val.toLowerCase())) setList([...frList, val]);
            else setState('inline');
        } 
        else {
            setList(frList.filter((fr) => fr.toLowerCase() !== val.toLowerCase()));    
        }
    }

    useEffect(() => {
        if (state === 'inline') {
            setTimeout(() => {
                setState('none');
            }, 2000);
        }
    }, [state]);

    return (
        <FriendList.Provider value={{frList, state, setState, change}}>
            <h1>My Friend: </h1>
            <ol>
                {
                    frList.map((fr, id) => (
                        <li key={id}>{fr}</li> 
                    ))
                }
            </ol>

            { children }
        </FriendList.Provider>
    )
}

export {ShowFriendList, FriendList};
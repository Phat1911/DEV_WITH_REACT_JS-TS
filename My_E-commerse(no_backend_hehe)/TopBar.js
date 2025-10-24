import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { useState, useEffect, useContext } from 'react';
import { CtData } from "./db/data";


const TopBar = () => {
    const { opt, Name, setRec, setName } = useContext(CtData);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        const handle = (e) => {
            if (e.key === "Enter") {
                setName(newName);   
                // console.log(newName);             
            }
        }
        document.addEventListener('keypress', handle);
        return () => document.removeEventListener('keypress', handle);
    }, [newName]);


    return (
        <div className="bar top-bar">
            <div className='search'>

                <input 
                    type="text" 
                    placeholder="Enter your search shoes"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />

                <div className='icon'>
                    <FaRegHeart />
                    <IoCartOutline />
                    <IoPersonOutline />
                </div>
                
            </div>

            <div className='recommended'>
                <h2 style={{marginBottom: '25px'}}>Recommended</h2>

                <div className='option'>
                    {
                        [...opt].map((o, id) => (
                            <span 
                                key={id}
                                onClick={() => setRec(o)} 
                            >{o}</span>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default TopBar
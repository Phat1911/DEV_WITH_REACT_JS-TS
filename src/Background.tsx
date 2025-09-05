import { createContext, useState, type ReactNode } from 'react';
import './index.css'

interface MyContextProps {
    CurColor: string;
    setCurColor: () => void;
};

export const MyContext = createContext <MyContextProps>({
    CurColor: 'black',
    setCurColor: () => {},
});

interface MyProviderProps {
    children: ReactNode;
}

const Background = ({ children }: MyProviderProps) => {
    const [CurColor, setColor] = useState <string> ('white');

    const setCurColor = () => setColor(CurColor == 'black' ? 'white' : 'black');

    return (
        <MyContext.Provider value={{ CurColor, setCurColor }}>
            <section className="container" style={{ background: CurColor }}>
                {children}
            </section>
        </MyContext.Provider>
    )
}

export default Background
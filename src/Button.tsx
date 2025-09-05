import { useRef, useContext, useState } from 'react'
import './index.css'
import { MyContext } from './Background';

const Button = () => {
    const [colorBall, setCb] = useState('black');

    const { CurColor, setCurColor } = useContext(MyContext);

    const ball = useRef <HTMLDivElement> (null);

    const handle = () => {
        ball.current!.style.transform = `translate(${ colorBall == 'black' ? 68 : 0}px)`;
        setCb( colorBall == 'black' ? 'white' : 'black' );
        setCurColor();
    };

    return (
        <div className="box" style={{borderColor: colorBall}} onClick={handle}>
            <div className="ball" style={{ background: colorBall }} ref={ball}></div>
        </div>   
    )
}

export default Button
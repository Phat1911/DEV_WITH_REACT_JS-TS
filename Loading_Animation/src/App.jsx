import { useEffect, useRef, useState } from "react";
import './index.css';

const App = () => {
    const balls = [], box = [], maintl = [];
    const [state, setState] = useState(true);

    for (let i = 0; i < 5; i++) {
      box.push(i);
      balls.push(useRef(null));
      maintl.push(useRef(null));
    }

    useEffect(() => {
      let de = 0.15;
      balls.map((ball, id) => {
        const tl = gsap.timeline({ 
          paused: true,
        });

        tl.to(ball.current, {
          duration: 0.3,
          y: -50,
          ease: 'linear',
          delay: de,
        }).to(ball.current, {
          duration: 0.3,
          delay: 0.15,
          y: 0,
          ease: 'linear',
        });

        de += 0.15; 
        maintl[id].current = tl;
      })
    });

    return (
      <section className="container">
        <div style={{display: 'flex'}}>
          {
          box.map((id) => (
            <div key={id} ref={balls[id]}></div>
          ))
          }
        </div>
        <h1 className="btn" 
          onClick={() => maintl.map((tl) => tl.current.restart(true))}
        >Action!</h1>
      </section>
    )
}

export default App

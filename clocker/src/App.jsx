import { useEffect, useRef, useState } from "react"
import './index.css'

const App = () => {
  const [state, setState] = useState('inline');
  const [content, setContent] = useState('');
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (state === 'inline') return;

    const decrease = () => {
      return new Promise ((resolve) => setTimeout(resolve, 1000));
    }

    const check = () => {
      if (time - 1 == 0) setState('inline');
    }

    async function proc() {
      await decrease();
      await check();
      setTime(time - 1);
    }
    proc();
  }, [time]);

  const handle = () => {
    setState('none');
    setContent('');
    setTime(Number(content));
  };

  return <section className="container">
    <div>
      <input 
        type="text" 
        placeholder='Enter Interval'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /> 

      <button onClick={() => handle()}>Set!</button> <br /><br />

      <span>{time}</span>

      <p style={{color: 'red', display: state}}> Hello I'm Phat, I'm here to wake up u</p>
    </div>
  </section>
}

export default App;

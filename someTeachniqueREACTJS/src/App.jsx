import { useEffect, useRef, useState } from "react"
import './index.css'

const App = () => {
    const [data, setData] = useState([]);
    const [states, setState] = useState([]);

    useEffect(() => {
      async function getData() {
        const respone = await fetch("/data.json");
        const D = await respone.json();
        setData(D);
        setState(Array(D.length).fill(false));
      }

      getData();
    }, []);

    return <section className="container">
      {
        data.map((item, id) => (
          <div key={id}>
            <div style={{display: 'flex'}}>
              <div className="content">
                {item.title}
                { states[id] ? <p>{item.content}</p> : '' }
              </div>

              <span className="btn" onClick={() => {
                const s = [...states];
                s[id] = !s[id];

                setState(s);
              }}> { states[id] ? "-" : "+" } </span>
            </div>
          </div>
        ))
      }
    </section>
}

export default App;

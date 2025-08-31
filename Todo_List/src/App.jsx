import { useEffect, useRef, useState } from "react"
import './index.css'

const App = () => {
    const [content, setContent] = useState('');
    const [list, setList] = useState([]);

    return <section className="container">
      <div>

        <div className="form">
          <input 
            type="text"
            placeholder="New Todo"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="btn" onClick={() => {
            setList([...list, content]);
            setContent('');
          }}> Submit </div>
        </div>
        
        {
          list.map((item, id) => (
            <div className="todo" key={id}>
              <p>{item}</p>  
              <span onClick={() => {
                setList(list.filter((l) => l !== item));
              }}>x</span>
            </div>
          ))
        }

      </div>
    </section>
}

export default App;

import { FaCartShopping } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { CtData } from "./db/data";


const SideBar = () => {
  const { cates, price, colors, setCate, setPrice, setColor } = useContext(CtData);
  const bors = Array((colors?.length || 0) + 1).fill('1px');
  const [borderBall, setB] = useState(Array((colors?.length || 0) + 1).fill('1px'));

  const handle = (id) => {
    const bor = [...bors];
    bor[id] = '3px';
    setB(bor);
  };

  return (
    <div className="bar side-bar">

      <FaCartShopping style={{fontSize: '2rem'}}></FaCartShopping>

      <div style={{marginTop: '60px'}}>
        <div>
          <h2>Category</h2> 
          
          {
            [...cates].map((cate, id) => (
              <div key={id} style={{ marginBottom: '5px' }}>
                
                <input 
                  type='radio' 
                  name='category'
                  onChange={() => setCate(cate)}
                />

                <label 
                  htmlFor={cate} 
                  style={{ marginLeft: '7px' }}
                >{cate}</label> 

              </div> 
            ))
          }
        </div>

        <div>
          <h2>Price</h2>

          {
            price.map((p, id) => (
              <div key={id} style={{ marginBottom: '5px' }}>
                <input 
                  type='radio' 
                  name='price'
                  onChange={() => {
                    setPrice(p);

                  }} 
                />
                <label htmlFor={p} style={{ marginLeft: '7px' }}>{p}</label> 
              </div> 
            ))
          }
        </div>

        <div>
          <h2>Color</h2>
          
          <div style={{ marginBottom: '5px' }}>

            <span 
              className='indicate-color' 
              style={{ borderWidth: borderBall[0] }}
              onClick={() => {
                const bor = [...borderBall];
                handle(0);
                setColor('All');
              }}>
            </span>

            <label 
              htmlFor='All' 
              style={{ marginLeft: '7px' }}
            >All</label> 

          </div> 

          {
            [...colors].map((color, id) => (

              <div key={id} style={{ marginBottom: '5px' }}>

                <span 
                  className='indicate-color' 
                  style={{ background: color, borderWidth: borderBall[id + 1] }} 
                  onClick={() => {
                    handle(id + 1);
                    setColor(color);
                  }}>
                </span> 

                <label 
                  htmlFor={color} 
                  style={{ marginLeft: '7px' }}
                >{color}</label> 

              </div> 

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SideBar
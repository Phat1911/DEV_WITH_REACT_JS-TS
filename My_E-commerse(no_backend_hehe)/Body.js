import { IoBag } from "react-icons/io5";
import { CtData } from "./db/data"
import { useEffect, useContext } from 'react'

const Body = () => {
  const { data, ListShoes, setListShoes, Category, Price, Color, Rec, Name } = useContext(CtData);

  useEffect(() => {
    const p = Price, list = [...data];
    let [a, b] = p.replace('$', '').replace("Over ", '').split('-');

    if (b == undefined) b = "999999999999";

    console.log(Name);

    setListShoes(list.filter((shoes) => (
      ( Category === 'All' || shoes.category === Category ) &&
      ( Price === 'All' || ( Number(a) <= Number(shoes.newPrice) && Number(b) >= Number(shoes.newPrice) ) ) && 
      ( Color === 'All' || shoes.color === Color ) &&
      ( Rec === 'All' || shoes.company === Rec ) &&
      ( Name === '' || shoes.title.toLowerCase().includes(Name.toLowerCase()) )
    )));
  }, [ Category, Price, Color, Rec, Name]);

  return (
    <div className='body'>
      {
        ListShoes.map((shoes, id) => (
          <div class='product' key={id}>

            <img src={shoes.img} alt={shoes.company} width='100%' />

            <h5>{shoes.title}</h5>

            <p>
              {shoes.star}{shoes.star}{shoes.star}{shoes.star}{shoes.star}  
              {shoes.reviews}
            </p>

            <div>
              <p>
                <span style={{ textDecoration: 'line-through', marginRight: '5px' }}>
                  { shoes.prevPrice }
                </span> 
                { shoes.newPrice }
              </p>

              <IoBag />
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default Body
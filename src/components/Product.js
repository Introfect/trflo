import React,{ useState,useEffect } from 'react'

import {useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

function Product({id, name, description, isVeg,rating, price, size,toppings, img_url}) {

  const dispatch = useDispatch(); 
  const rate=[rating]
  const addItemToBasket = () => {
    const product = {
      id, name, description, isVeg,rating, price, size,toppings, img_url, selectedOption,toppigSelectedOption
    };
    // Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  }
  const [popup,setPopup]=useState(false)
  const [selectedOption, setSelectedOption] = useState([]);
  const [toppigSelectedOption, setToppingSelectedOption] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleToppingsOptionChange = (event) => {
    setToppingSelectedOption(event.target.value);
  };
  return (
    <div className='relative'>
      <div>
      {popup && <div className='absolute top-3/4 left-3/4 bg-blue-500 z-20 p-10'>
        <div className='flex justify-center m-4'>
          {size.map((size)=>(
            <div className='p-3 m-4 flex flex-col justify-center items-center'>
              <h1 className='text-center font-bold text-xl'>{size.title}</h1>
              {size.items.map((item)=>(
                <div>
                 <label>
                   <input className='flex'type="radio" value={item.size} checked={selectedOption === item.size} onChange={handleOptionChange} />
                   {item.size}
                 </label>
               </div>
                ))}
              </div>
          ))}
           {toppings.map((toppings)=>(
             <div className='flex flex-col justify-center items-center'>
              <h1 className='text-center font-bold text-xl'>{toppings.title}</h1>
                <div>
                  {toppings.items.map((items)=>(
                    
                 <label>
                   <input className='flex' type="radio" value={items.name} checked={toppigSelectedOption === items.name} onChange={handleToppingsOptionChange} />
                   {items.name}
                 </label>
                 ))}
               </div> 
              </div>
          ))}
          </div>
              <div className='flex justify-center'>
              <button onClick={()=>addItemToBasket()} className='flex justify-center bg-blue-400 p-2 rounded-md'>Buy now</button>
              </div>
          <h1 className='text-center font-bold text-xl'></h1>
          <div className='flex justify-center'>
          <button onClick={()=>setPopup(!popup)} className='flex justify-center m-3 bg-blue-400 p-2 rounded-md'>Close</button>

      </div>
      </div>}
      </div>
    <div key={id} className='flex-col border-2 rounded-lg m-5 bg-white p-10'>

        

      <img src={img_url} alt='' className='height={400} width={400} objectFit={contain} rounded-lg'/>
      <h1 className='font-bold text-center my-2'>{name}</h1>
      <div className='flex'>
        </div>

            <p className='text-xs my-2 text-gray-400 line-clamp-2'>{description}</p>
      <div className='flex justify-center'>
      <button onClick={()=>setPopup(!popup)} className='flex justify-center bg-blue-400 p-2 rounded-md'>Buy now</button>
      </div>

          </div>
  
    </div>
  )
}

export default Product
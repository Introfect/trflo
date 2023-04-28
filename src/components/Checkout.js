import Header from '@/components/Header'
import { selectItems } from '@/slices/basketSlice'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'


const Checkout = () => {
  const items =useSelector(selectItems)
  useEffect(() => {
    console.log(111)
  }, [items])
  return (
    <div className='bg-gray-400 min-w-max'>
    <main className='lg:flex max-w-screen-2xl mx-auto'> 
      <div className='flex-grow m-5 shadow-sm'>
        {items.length>0?(
          <div>
            <h1 className='text-3xl border-b pb-4'>Your Shopping Basket</h1>
            {items.map((item,i)=>(
              <div key={i} className='flex'>
                <Image src={item.img_url} height={200} width={200} objectFit='contain'/>
                <div className='flex flex-col'>
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                  <p>{item.selectedOption}</p>
                  <p>{item.toppigSelectedOption}</p>
                </div>
              </div>
            ))}
          </div>
        ):(
          <div>
            <h2>Your Shopping Basket is empty</h2>
          </div>
        )}
    </ div>
    </main>
    </div>
  )
}

export default Checkout
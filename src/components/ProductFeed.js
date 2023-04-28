import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
  return (
    <div  className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-54 mx-auto'>
        {products.map(({id, name, description, isVeg,rating, price, size,toppings, img_url})=>(
            <Product
            id={id}
            name={name}
            price={price}
            isVeg={isVeg}
            rating={rating}
            toppings={toppings}
            size={size}
            description={description}
            img_url={img_url}
            />
        ))}


        
    </div>
  )
}

export default ProductFeed 


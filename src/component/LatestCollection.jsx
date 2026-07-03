
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductContex'
import Title from './Title'
import ProductItem from './ProductItem'


const LatestCollection = () => {
        const {products} = useContext(ProductContext)
        const [ latestProducts,setLatestProducts] =useState([]);

       useEffect(() => {
  if (products && products.length > 0) {
    setLatestProducts(products.slice(0, 10));
  }
}, [products]);
  return (
    <div className=' my-10'>
      <div className='text-center text-3xl py-8'>
         <Title text1={"LATEST"}  text2={" COLLECTIONS"}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm
          md:text-base text-gray-600'>Lorem ipsum dolor, sit amet consectetur i debitis voluptatum consequatur !
          </p>

      </div>

        {/* Rendering Product */}

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
         {latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item.id} image={item.image} name={item.name} Price={item.price}/>
         ) 
        )}
     </div>

    </div>
  )
}

export default LatestCollection
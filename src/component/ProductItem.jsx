import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContex'
import { Link } from 'react-router-dom'



const ProductItem = ({id,image,name,Price}) => {

    const{currency} = useContext(ProductContext)
  return (
   <Link  className ="text-gray-700 cursor-pointer " to ={`/product/${id}`}>
     <div className='overflow-hidden'>
<img
  className='hover:scale-110 transition ease-in-out'
  src={image}
  alt={name}
/>     </div>
     <p className='pt-3 pb-1 text-sm'>{name}</p>
     <p className='text-sm font-medium'>{currency}{Price}</p>
   
   </Link>
      
   
  )
}

export default ProductItem



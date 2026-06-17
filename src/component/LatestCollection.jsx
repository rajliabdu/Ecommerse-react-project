
import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContex'


const LatestCollection = () => {
    const {products} = useContext(ProductContext)
console.log(products);

  return (
    <div>
        
    </div>
  )
}

export default LatestCollection
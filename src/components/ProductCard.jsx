import React from 'react'
import Button from './Button'

const ProductCard = ({product, deleteProduct, updateProduct}) => {
const {id, images, title, price} = product
  return (
    <>
      <img 
      src={images[0]} 
      alt={title} 
      style={{width : "200px", height: "200px"}} 
      />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <div>
        {/* <Button action={"Edit"} handler={updateProduct}/>
        <Button action={"Delete"} handler={deleteProduct}/> */}

        <button type="button" onClick={() => updateProduct(product)}> Edit</button>
        <button type="button" onClick={() => deleteProduct(id)}> Delete</button>
        
      </div>
    </>
  )
}

export default ProductCard
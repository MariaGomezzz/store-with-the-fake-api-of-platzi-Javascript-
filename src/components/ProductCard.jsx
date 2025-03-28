import React from 'react'
import Button from './Button'

const ProductCard = ({imgSrc, title, price, deleteProduct, updateProduct}) => {

  return (
    <>
      <img 
      src={imgSrc} 
      alt={title} 
      style={{width : "200px", height: "200px"}} 
      />
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
      <div>
        <Button action={"Edit"} handler={updateProduct}/>
        <Button action={"Delete"} handler={deleteProduct}/>
      </div>
    </>
  )
}

export default ProductCard
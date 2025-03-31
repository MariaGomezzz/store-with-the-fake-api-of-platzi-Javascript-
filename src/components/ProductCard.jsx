import React from 'react'


const ProductCard = ({ product, deleteProduct, updateProduct }) => {
  const { id, images, title, price } = product
  return (
    <>
      <div className={"drop-shadow-xl rounded-xl bg-white w-60 flex flex-col justify-center p-4 m-5"}>
        <img
        className='m-auto'
          src={images[0]}
          alt={title}
          style={{ width: "190px", height: "190px" }}
        />

        <div className='w-en m-6 text-start'>
          <p>{title}</p>
          <p className='mt-3'>$ {price}</p>
        </div>

        <div className='flex justify-around'>
          <button className={"bg-blue-500 p-2 w-18 rounded-xl"} type="button" onClick={() => updateProduct(product)}> Edit</button>
          <button className={"bg-blue-500 p-2 w-18 rounded-xl"} type="button" onClick={() => deleteProduct(id)}> Delete</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard
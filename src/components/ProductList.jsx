import React, { useEffect, useState } from 'react'
import api from '../services/api'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'

const ProductList = () => {

  const [products, setProducts] = useState(null)

  const url = "https://api.escuelajs.co/api/v1/products"
  const getProducts = "?offset=0&limit=10"

  // let api = 

  useEffect(() => {
    api().get(`${url}/${getProducts}`).then((res) => setProducts(res))
  }, [])

  const handlerCreateProduct = (data) => {
    api().post((`${url}/`), {
      "title": data.name,
      "price": data.price,
      "description": data.description,
      "categoryId": 1,
      "images": ["https://placehold.co/200x200"]
    })
  }

  const handlerUpdateProduct = (data) => {
    //Confirmacion de actualizacion 

    //operacion
    api().put((`${url}/${data.id}`), {
      body: data
    })
  }

  const handlerDeleteProduct = (id) => {
    //Confirmacion delete

    //operacion
    api().del(`${url}/${id}`)
  }

  console.log(products)
  return (
    <>
      <h2>Create product</h2>
      <ProductForm handlerCreateProduct/>


      <h2>Product list</h2>
      {(products !== null) && products.map((product) => (
        <ProductCard
          key={product.id}
          imgSrc={product.images[0]}
          title={product.title}
          price={product.price}
          updateProduct={handlerUpdateProduct}
          deleteProduct={handlerDeleteProduct}
        />
      ))}

    </>
  )
}

export default ProductList
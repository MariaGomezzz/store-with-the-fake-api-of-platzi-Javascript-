import React, { useEffect, useState } from 'react'
import api from '../services/api'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'

const ProductList = () => {

  const [products, setProducts] = useState(null)

  const url = "https://api.escuelajs.co/api/v1/products"
  // const getProducts = "?offset=0&limit=10"
  const getProducts = "?offset=0&limit=2"

  // let api = 

  useEffect(() => {
    // api().get(`${url}/${getProducts}`).then((res) => setProducts(res))
    api().get(`${url}/`).then((res) => setProducts(res))
  }, [])

  const handlerCreateProduct = (data) => {
    console.log("data llega form: ", data)

    console.log("agregar datos: ", data)
    api().post((url), {
      body: {
        ...data,
        price: Number(data.price),
        categoryId: 1,
        images: ["https://placehold.co/200x200"]
      }
    }).then((res) => console.log("Res platzi: ", res))
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
      <div className='flex'>
        <div>
          <h2>Create product</h2>
          <ProductForm handlerCreateProduct={handlerCreateProduct} />
        </div>

        <div className='grow'>
          <h2>Product list</h2>
          <div className='flex flex-wrap'>
            {(products !== null) && products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                updateProduct={handlerUpdateProduct}
                deleteProduct={handlerDeleteProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
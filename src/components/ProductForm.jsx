import React, { useState } from 'react'

//Estodo incial del formulario -> se declara porque react lo pide
// const initialForm = {
//   title: "",
//   price: 0,
//   description: ""
// }

const ProductForm = ({ handlerCreateProduct }) => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    description: ""
  })

  //Manejo de los cambio o valores ingresados en los inputs
  const handlerChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    //validar campos completos
    if (!form.title || form.price === 0 || !form.description) alert("No se pueden dejar campos vacios")

    if (form.title && form.price && form.description) handlerCreateProduct(form)

    console.log("form", form)
  }


  return (
    <>
      <div className=' w-60 text-start '>

        <form onSubmit={handlerSubmit}>
          <div className='flex flex-col m-2'>
            <label htmlFor="title">Name</label>
            <input type="text" name="title" id="title"
              className='border border-black rounded-md'
              value={form.title}
              onChange={handlerChange} />
          </div>

          <div className=' flex flex-col m-2'>
            <label htmlFor="price">Price</label>
            <input
              type="number" name="price" id="price"
              className='border border-black rounded-md'
              min="1"
              value={form.price}
              onChange={handlerChange}
            />
          </div>

          <div className='flex flex-col m-2'>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description"
              className='border border-black rounded-md'
              value={form.description}
              onChange={handlerChange} />
          </div>

        <div className='flex justify-center m-4'>
          <input
            type="submit"
            value="Create"
            className='bg-blue-400 p-2 w-25 rounded-md'
          />
        </div>
        </form>
      </div>

    </>
  )
}

export default ProductForm
import React, { useState } from 'react'

//Estodo incial del formulario -> se declara porque react lo pide
// const initialForm = {
//   title: "",
//   price: 0,
//   description: ""
// }

const ProductForm = ({handlerCreateProduct}) => {
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
    if(!form.title || form.price === 0 || !form.description) alert("No se pueden dejar campos vacios")

    form.price = Number(form.price)

    if(form.title && form.price && form.description) handlerCreateProduct(form)

    console.log("form", form)
  }


  return (
    <>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="title">Name</label>
        <input type="text" name="title" id="title" value={form.title} onChange={handlerChange}/>
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" min="1" value={form.price} onChange={handlerChange}/>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" value={form.description} onChange={handlerChange}/>
        <input type="submit" value="Create" onSubmit={handlerSubmit}/>
      </form>

    </>
  )
}

export default ProductForm
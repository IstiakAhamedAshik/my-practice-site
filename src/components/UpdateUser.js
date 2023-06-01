import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateUser = () => {
  const product = useLoaderData()

  const [users, setUsers] = useState(product)
  const handleAddUser = (event) => {
    event.preventDefault()
    fetch(`http://localhost:5000/product/${product._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
  const handaleInputBlur = (event) => {
    event.preventDefault()
    const field = event.target.name
    const value = event.target.value
    const newUser = { ...users }
    newUser[field] = value
    setUsers(newUser)
  }

  return (
    <div>
      <h1>please UpDate user:</h1>
      <div>
        <form onSubmit={handleAddUser}>
          <input
            onBlur={handaleInputBlur}
            type='text'
            defaultValue={product.name}
            name='name'
            placeholder='enter your name'
            required
          />
          <br />
          <input
            onBlur={handaleInputBlur}
            type='text'
            defaultValue={product.picture}
            name='picture'
            placeholder='enter your url'
            required
          />
          <br />
          <input
            onBlur={handaleInputBlur}
            type='text'
            defaultValue={product.price}
            name='price'
            placeholder='enter the price'
            required
          />
          <br />
          <input type='submit' value='UpdateUser' />
        </form>
      </div>
    </div>
  )
}

export default UpdateUser

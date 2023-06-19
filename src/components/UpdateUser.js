import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import './all.css'
const UpdateUser = () => {
  const product = useLoaderData()

  const [users, setUsers] = useState(product)
  const handleAddUser = (event) => {
    event.preventDefault()
    fetch(`https://z-my-practice-crud.vercel.app/product/${product._id}`, {
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
    <div className='login-page'>
      <h1 className='text-xl font-medium'>Update Your car Car:</h1>
      <div>
        <form onSubmit={handleAddUser}>
          <div>
            <input
              onBlur={handaleInputBlur}
              type='text'
              name='name'
              placeholder='Your car name'
              required
            ></input>
          </div>
          <div>
            <input
              onBlur={handaleInputBlur}
              type='text'
              name='picture'
              placeholder='Car Url'
            ></input>
          </div>
          <div>
            <input
              onBlur={handaleInputBlur}
              type='text'
              name='price'
              placeholder='Give Price'
              required
            ></input>
          </div>
          <div>
            <input className='login-btn' type='submit' value='Update CAR' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser

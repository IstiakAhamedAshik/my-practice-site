import React, { useState } from 'react'
import './all.css'
const AddUser = () => {
  const [users, setUsers] = useState({})
  const handleAddUser = (event) => {
    event.preventDefault()
    console.log(users)

    fetch('http://localhost:5000/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          alert('User added Successfully')
          event.target.reset()
        }
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
      <h1 className='text-xl font-medium'>please add new Car:</h1>
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
              required
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
            <input className='login-btn' type='submit' value='ADD CAR' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddUser

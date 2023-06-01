import React, { useState } from 'react'

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
    <div>
      <h1>please add new user:</h1>
      <div>
        <form onSubmit={handleAddUser}>
          <input
            onBlur={handaleInputBlur}
            type='text'
            name='name'
            placeholder='enter your name'
            required
          />
          <br />
          <input
            onBlur={handaleInputBlur}
            type='text'
            name='picture'
            placeholder='enter your url'
            required
          />
          <br />
          <input
            onBlur={handaleInputBlur}
            type='text'
            name='price'
            placeholder='enter the price'
            required
          />
          <br />
          <input type='submit' value='AddUser' />
        </form>
      </div>
    </div>
  )
}

export default AddUser

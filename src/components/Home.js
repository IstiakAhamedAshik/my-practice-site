import React, { useState } from 'react'
import ShowCar from './ShowCar'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const cars = useLoaderData()
  const [displayCar, SetDisplayCar] = useState(cars)

  const handaleDelete = (car) => {
    const aggre = window.confirm(`you want to delete, ${car.name}`)
    if (aggre) {
      fetch(`http://localhost:5000/product/${car._id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount > 0) {
            const newCarItem = displayCar.filter((c) => c._id !== car._id)
            alert('user delete successfully')
            SetDisplayCar(newCarItem)
          }
        })
    }
  }

  return (
    <div>
      <h1>Cars:{displayCar?.length}</h1>
      <div className='car-mother'>
        {displayCar?.map((car) => (
          <ShowCar
            key={car._id}
            car={car}
            handaleDelete={handaleDelete}
          ></ShowCar>
        ))}
      </div>
    </div>
  )
}

export default Home

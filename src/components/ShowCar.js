import React from 'react'
import { Link } from 'react-router-dom'

const ShowCar = (props) => {
  const { _id, name, picture, price } = props.car
  const { car } = props
  const { handaleDelete } = props
  return (
    <div>
      <div className='car-section'>
        <img src={picture} alt='' />
        <div className='car-description'>
          <h3>Name: {name}</h3>
          <p>Price: {price}</p>
        </div>
        <div className='car-button'>
          <Link to={`/update/${_id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handaleDelete(car)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ShowCar

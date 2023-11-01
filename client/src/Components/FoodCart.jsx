import React from 'react'
import "../Styles/FoodCart.css"



const FoodCart = ({item}) => {
  return (
        <div className='food-content'>
            <img className='img-div' src={item.image} alt="" />
            <h3 className='item-name'>{item.name}</h3>
            <p>Price:</p>
            <button>Order Now</button>
      </div>
  )
}

export default FoodCart

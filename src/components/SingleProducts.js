import React from 'react'
import { CartState } from './Context'

const SingleProducts = ({ prod }) => {

    const { cart, setCart } = CartState();

  return (
      <div className='products'>
          <img src={prod.image} alt={prod.id} style={{ height: "200px", width: '200px' }} />
          <br />
          <div className="productDesc">
              <span style={{ fontWeight: 700 }}>{prod.title}</span>
              <br />
              <span style={{fontSize: 20,
    fontWeight: 'bold',}}>Rs. { Number(prod.price.toFixed())}</span>
          </div>    
          {cart.includes(prod) ? (
          <button {{cursor: pointer}} className='Delete' onClick={() =>
                      setCart(cart.filter((item) =>
                          item.id !== prod.id
                      ))}>Remove from cart</button>
          
          ) :
              (
                  
      
      <button style={{cursor: pointer}} className='add' onClick={() =>
                      setCart([...cart,prod])}>Add to cart</button>
    )
}      
    </div>
  )
}

export default SingleProducts

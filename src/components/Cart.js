import React, { useEffect, useState } from 'react'
import { CartState } from './Context';
import SingleProducts from './SingleProducts';


const Cart = () => {
  const { cart } = CartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((a, b) => a + Number(b.price), 0));
  }, [cart]);

  return (
      <div>
         <span style={{fontSize:30,textDecorationLine: 'underline'}}>MyCart</span> <br />
      <span style={{ fontSize: 30 }}>Total: {Number(total.toFixed())}</span>  <br /><br />
      <span><button > CheckOut </button></span>
      <div className="productContainer">
        {console.log(cart)}
        {cart.map((prod) => 
          <SingleProducts prod={prod} key={prod.id}/>
        )}
      </div>
    </div>
  )
}

export default Cart

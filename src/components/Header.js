import React from 'react'
import { Link } from 'react-router-dom'
import "../style.css"
import "../App.css"
import  {CartState} from './Context'
const Header = () => {
  const { cart } = CartState();

  return (
    <div>
      <span className='header' >Shopping Cart</span>
      <ul className="nav">
        <li >
          <Link to='/'>Home Page</Link>
        </li>
         <li>
          <Link to='/cart'>Cart({ cart.length})</Link>
        </li>


      </ul>
    </div>
  )
}

export default Header

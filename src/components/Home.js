import { useContext} from "react"
import SingleProducts from "./SingleProducts";
import {Cart} from "./Context.js";

const Home = () => {

  // const productArray = fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //   .then(json => console.log(json))

  const { cart, setCart,products } = useContext(Cart);
  
  
  
  return (
    <div className="productContainer">
      {console.log(products)}
      {products.map((prod) => {
        return (<SingleProducts prod={prod} cart={cart} setCart={ setCart} />)
      }) }
    </div>
  )
}

export default Home

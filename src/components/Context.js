import { createContext,useState ,useEffect, useContext} from 'react'

export const Cart = createContext();


const Context = ({ children }) => {
    
  const [cart, setCart] = useState([]);
    
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  return (
    <Cart.Provider value={{ cart, setCart, products }}>
      {children}
    </Cart.Provider>
  )
};
export const CartState = () => {
  return useContext(Cart);
};
export default Context;

import { useEffect, useState } from 'react'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart';
import './App.css'

function App() {

  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    console.log(cart)
  }, [cart]
  )

  const addToCart = (productInfo) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, productInfo]
      return updatedCart
    });
  }

  return (
    <>
    <Cart cartItems={cart}></Cart>
    <ProductList addToCart={addToCart}></ProductList>
    </>
  )
}

export default App

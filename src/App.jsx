  import { useEffect, useState } from 'react'
  import ProductList from './components/ProductList/ProductList'
  import Cart from './components/Cart/Cart';
  import './App.css'

  function App() {

    const [cart, setCart] = useState([]);
    
    useEffect(() => {
      console.log("cartsityo" + JSON.stringify(cart))
    }, [cart]
    )

    const addToCart = (productInfo) => {
      setCart((prevCart) => {
        const updatedCart = [...prevCart, {...productInfo, quantity:1}]
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

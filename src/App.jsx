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
        const existingItem = prevCart.find(item => item.id === productInfo.id);
    
        if (existingItem) {
          return prevCart.map(item =>
            item.id === productInfo.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...productInfo, quantity: 1 }];
        }
      });
    };

    return (
      <>
      <Cart cartItems={cart} setCart={setCart} />
      <ProductList addToCart={addToCart}></ProductList>
      </>
    )
  }

  export default App

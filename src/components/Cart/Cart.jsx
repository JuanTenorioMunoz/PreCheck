import { useEffect, useState } from "react";

const Cart = ({cartItems}) => {

    const [cartTotal, setCartTotal] = useState(0);
    const [quantity, setQuantity] = useState(1)
    
    useEffect(
        ()=> {
            const total = cartItems.length > 0 ? cartItems.reduce((sum, item) => sum + item.price * quantity, 0) : "fuckyou";
            setCartTotal(total);
        }, [cartItems]
    )

    return(
        <div className="Cart">
        <div>
            <p>Total</p>
            <p>{cartTotal}</p>
        </div>
             {cartItems.map((item)=> (
                <div>
                    <div>{item.name}</div>
                    <div>{quantity}</div>
                    <button onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}></button>
                </div>
              ))}
        </div>
    )
}

export default Cart
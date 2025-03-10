import { useEffect, useState } from "react";

const Cart = ({cartItems}) => {

    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(
        ()=> {
            const total = cartItems.length > 0 ? cartItems.reduce((sum, item) => sum + item.price, 0) : "fuckyou";
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
                <div>{item.name}</div>
            ))}
        </div>
    )
}

export default Cart
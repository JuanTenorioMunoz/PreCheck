import { useEffect, useState } from "react";

const Cart = ({ cartItems, setCart }) => {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setCartTotal(total);
    }, [cartItems]);

    const updateQuantity = (id, change) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
            )
        );
    };

    return (
        <div className="Cart">
            <div>
                <p>Total</p>
                <p>{cartTotal}</p>
            </div>
            {cartItems.map(item => (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.quantity}</div>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                </div>
            ))}
        </div>
    );
};

export default Cart;

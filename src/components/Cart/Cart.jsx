const Cart = ({cartItems}) => {
    return(
        <div className="Cart">
            {cartItems.map((item)=> (
                <div>{item.name}</div>
            ))}
        </div>
    )
}

export default Cart
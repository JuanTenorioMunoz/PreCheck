const ProductItem = ({productInfo, addToCart}) => {
    return(
                <div key={"product" + productInfo.id}>
                    <p>{productInfo.name}</p>
                    <p>{productInfo.price}</p>
                    <button onClick={()=> addToCart(productInfo)}></button>
                </div>
    )
}

export default ProductItem;
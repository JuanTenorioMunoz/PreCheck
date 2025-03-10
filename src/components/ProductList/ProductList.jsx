import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({addToCart}) => {
    
    const [products,setProducts] = useState([]);

    useEffect(()=> {
        fetch("/data.json")
        .then((response)=>response.json())
        .then((data) => {
            setProducts(data);
            console.log(data)})
    }, [])

    return(
        <div className="product-list">
        {products.map((product)=>(
            <ProductItem 
                key={product.id}
                productInfo={product}
                addToCart={addToCart}
            ></ProductItem>
        ))}
        </div>
    )
}

export default ProductList;
import { useEffect, useState } from "react";

const ProductList = () => {
    
    const [products,setProducts] = useState([]);

    useEffect(()=> {
        fetch("/data.json")
        .then((response)=>response.json())
        .then((data) => {
            setProducts(data);
            console.log(data)})
    }, [])

    return(
        <div className="ProductList">
            {products.map((product)=>(
                <div key={product.id}>
                    <p>{product.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductList;
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./product.css"
export const SingleProduct = () => {
    const id = useParams().id
    const [singleProduct, setSingleProduct] = useState({});
    useEffect(() => {
        const getSingleProduct = async () => {
            const response = await fetch(`http://localhost:8800/api/product/${id}`)
            const data = await response.json();
            console.log(data)
            setSingleProduct(data);
        }
        getSingleProduct();
    }, [])
    const {title, imgUrl, price} = singleProduct
    return (
        <div>
            <div className="single_card">
            <div className="single_card-top">
                <img className="single_card-img" src={imgUrl}/>
            </div>
            <div className="single_card-bottom">
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
            <button>Add to Cart</button>
            <button>Buy Now</button>
        </div>
        </div>
    )
}
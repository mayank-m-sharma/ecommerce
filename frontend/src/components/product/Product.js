import "./product.css"
import { Link } from "react-router-dom"
export const Product = ({title, img, price, id}) => {
    const showsingleproducturl = `http://localhost:8800/api/product/${id}`
    
    return (
        <div className="card">
            <Link to={`/products/${id}`}>
            <div className="card-top">
                <img className="card-img" src={img}/>
            </div>
            <div className="card-bottom">
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
            </Link>
            <button>Add to Cart</button>
            <button>Buy Now</button>
        </div>
    )
}
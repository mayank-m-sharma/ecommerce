import "./product.css"

export const Product = ({title, img, price, id}) => {
    const showsingleproducturl = `http://localhost:8800/api/products/${id}`
    return (
        <div className="card">
            <div className="card-top">
                <img className="card-img" src={img}/>
            </div>
            <div className="card-bottom">
                <h2>{title}</h2>
                <p>{price}</p>
            </div>
            <a href={showsingleproducturl}>show product</a>
        </div>
    )
}
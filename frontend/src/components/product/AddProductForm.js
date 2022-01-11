import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios'
const AddProductForm = () => {
    
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [imgUrl, setImgUrl] = useState("")

    const addProductHandler = (e) => {
        e.preventDefault();
        const newProduct = {
            "title": title,
            "price": price
            // category,
            // description,
            // quantity,
            // imgUrl,
        }

        // logic
        const url = "http://localhost:8800/api/product"

        axios.post(url, newProduct, {
            method: "post",
            mode: 'no-cors',
		    headers: {
			'Access-Control-Allow-Origin': '*',
			Accept: 'application/json',
			'Content-Type': 'application/json',
		    },
            withCredentials: true,
            credentials: 'same-origin',
            crossdomain: true,
        }).then(response => console.log(response.data))

        // setTitle("");
        // setPrice("");
        // setCategory("");
        // setDescription("");
        // setQuantity("");
        // setImgUrl("");

        
        const test = JSON.stringify(newProduct)
        console.log(test)
    }
    return (
        <div className="add-product">
            <h1>Add Product</h1>
            <form onSubmit={(e) => addProductHandler(e)}>
                <div className="form-group">
                    <TextField value={title} onChange={e => setTitle(e.target.value)} label="Title" variant="outlined" type="text"/>
                    <TextField value={price} onChange={e => setPrice(parseInt(e.target.value))} label="price" variant="outlined" />
                    <TextField value={category} onChange={e => setCategory(e.target.value)} label="category" variant="outlined" />
                    <TextField value={description} onChange={e => setDescription(e.target.value)} label="description" variant="outlined" />
                    <TextField value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}  label="quantity" variant="outlined" />
                    <TextField value={imgUrl} onChange={e => setImgUrl(e.target.value)} label="Image URL" variant="outlined" />
                </div>
                <div>
                    <button className="btn-add">Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductForm

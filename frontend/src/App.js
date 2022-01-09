import './App.css';
import React, {useEffect, useState} from 'react'

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const url1 = "https://ecombackend1.herokuapp.com/api/product"
  const [products, setProducts] = useState([]);
    useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url1, {
        method: 'GET',
        mode: 'cors',
        headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      });
      const data = await response.json()
      console.log(data)
    }
    fetchProducts()
   },[])
  return (
    <div className="App">
        {/* {products.map(product => (
          <h1>{product}</h1>
        ))} */}
        <p>hello world</p>
    </div>
  );
}

export default App;

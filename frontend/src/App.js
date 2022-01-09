import './App.css';
import React, {useEffect, useState} from 'react'


function App() {
  const url = "http://127.0.0.1:8800/api/products"
  const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch(url, {
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

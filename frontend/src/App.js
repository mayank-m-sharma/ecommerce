import './App.css';
import React, {useEffect, useState} from 'react'
import { Product } from './components/product/Product';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { SingleProduct } from './components/product/SingleProduct';
import AddProductForm from './components/product/AddProductForm';
const Home = ({products}) => {
  return (
    <div className="products-container"> 
      {products.map(product => {
        return <Product key={product._id} id={product._id} title={product.title} price={product.price} img={product.imgUrl}/>
      })}
    </div>
  )
}

function App() {
  
  const url1 = "http://localhost:8800/api/product"
  const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(url1);
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
   },[])
  return (
   <Router>
      <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="/products/:id" element={<SingleProduct />}/>
          <Route path="/products/add" element={<AddProductForm/>}/>
      </Routes>
   </Router>
  );
}

export default App;

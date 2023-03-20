import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import Datas from "./data";
import ProductCard from "./productCard";
import axios from "axios";

const Products = () => {
  // const [datas, setDatas] = useState(Datas);

  // console.log(datas);

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Home</Link>
      <div>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
          // <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;

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

  const handleDelete = async (props_id) => {
    // console.log(_id);
    const res = await axios.delete(
      `http://localhost:8080/api/products/${props_id}`
    );
    console.log(res.data);

    if (res.data._id) {
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <Link to="/">Home</Link>
      <div>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} handleDelete={handleDelete} />
          // <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Products;

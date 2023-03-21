import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
const brands = ["Brand 1", "Brand 2", "Brand 3", "Brand 4"];

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, SetDescription] = useState("");

  const postProduct = async (product) => {
    await axios.post("http://localhost:8080/api/products", product);

    console.log(product);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ title, price, category, brand, discount, help });

    // add logic for submitting form data to backend or state management system
    postProduct({
      title,
      thumbnail,
      price,
      category,
      brand,
      discountPercentage,
      description,
    });
  };

  return (
    <div>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Thumbnail</label>
          <input
            type="text"
            id="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="brand">Brand</label>
          <select
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">Select a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="discountPercentage">Discount</label>
          <input
            type="text"
            id="discountPercentage"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
          />
        </div>
        <div>
          <Link to="/products">Products</Link>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;

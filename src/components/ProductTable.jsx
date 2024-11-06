import React from "react";
import ProductRow from "./ProductRow";
import "./ProductTable.css"; // Import the CSS file

export default function ProductTable({ products }) {
  return (
    <div className="table-container">
      <h1>Product Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

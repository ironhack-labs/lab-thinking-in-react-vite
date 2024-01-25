import React, { useState } from "react";
import jsonData from "../src/data.json";  // Ajusta la ruta según la estructura de tu proyecto
import ProductsRow from "../components/ProductsRow";

function ProductsTable() {
  const [products, setProducts] = useState(jsonData);
  


  return (
    <div>
      <table className="table table-bordered mt-3">
            <thead className="thead-dark">
              <tr>
              <th scope="col">Name</th>
                <th scope="col">Price</th>              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td style={{ color: product.inStock ? "green" : "red"}}>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      
    </div>
  );
}

export default ProductsTable;

import React from 'react';
import './ProductTable.css'; // Import the CSS file

export default function ProductRow({ product }) {
  return (
    <tr >
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td className={product.inStock ? '' : 'out-of-stock'} >
        {product.inStock ? 'Yes' : 'No'}
      </td>
    </tr>
  );
}
import React from "react";

const ProductRow = ({ product }) => {
  const nameStyle = product.inStock ? {} : { color: 'red' };
   
  return (
    <tr>
    <td style={nameStyle}>{product.name}</td>
    <td>{product.price}</td>
  </tr>
  );
};


export default ProductRow;
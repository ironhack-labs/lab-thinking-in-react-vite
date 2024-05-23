//import { useState } from "react";
import PropTypes from 'prop-types';

function ProductRow({productList}) {
  return (
    <>
    {productList.map((item) => {
        if (!item.inStock) {
            return (
        <tr key={item.id}>
        <td style={{color:"red"}}>{item.name}</td>
        <td>{item.price}</td>
        </tr>
        )
        }
        else {
        return (
        <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        </tr>
        )
        }
    })}
    </>
  )
}

ProductRow.propTypes = {
  productList: PropTypes.array
};

export default ProductRow;
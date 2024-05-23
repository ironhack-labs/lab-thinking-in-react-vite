// import { useState } from "react";
import PropTypes from 'prop-types';
import ProductRow from "./ProductRow";

function ProductTable({productList}) {
  return (
    <div>
      <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <ProductRow productList={productList}/>
        </tbody>
      </table>
    </div>
  );
}

ProductTable.propTypes = {
  productList: PropTypes.array
};
export default ProductTable;
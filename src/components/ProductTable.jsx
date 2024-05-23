// import { useState } from "react";
import PropTypes from 'prop-types';
import ProductRow from "./ProductRow";
//{"category": "Sporting Goods",  
//"price": "$49.99",    "inStock": true,    
//"name": "Football",    
//"id": "295a4dab-74b2-4e60-b3c2-c1346aba7585"},

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
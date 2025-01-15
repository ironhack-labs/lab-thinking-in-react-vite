/* eslint-disable react/prop-types */
function ProductRow({ product }) {
  const textStyle = product.inStock ? {} : { color: "red" };

  return (
    <tr>
      <td style={textStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;

function ProdcutRow({ product }) {
  console.log(product)
  const rowClass = product.inStock ? 'product-row' : 'product-row-not-stock';
  return (

  <tr  style={{ backgroundColor: 'white'}}>
    
      <td className={rowClass} style={{width: '50%'}}> {product.name} </td>
      <td style={{width: '50%'}}> {product.price} </td>
  </tr>
  


     
  );
}
export default ProdcutRow;
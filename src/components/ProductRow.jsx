function ProdcutRow({ product }) {
  console.log(product);
  return (

  <tr  style={{width: '100%', backgroundColor: 'white'}}>
    
      <td style={{width: '50%'}}> {product.name} </td>
      <td style={{width: '50%'}}> {product.price} </td>
  </tr>
  


     
  );
}
export default ProdcutRow;
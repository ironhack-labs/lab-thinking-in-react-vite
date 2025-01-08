function ProdcutRow({ product }) {
  console.log(product);
  return (



  <tbody>
  <tr  style={{width: '100%', backgroundColor: 'white'}}>
    
      <td style={{width: '50%'}}> {product.name} </td>
      <td style={{width: '50%'}}> {product.price} </td>
  </tr>
  </tbody>


     
  );
}
export default ProdcutRow;
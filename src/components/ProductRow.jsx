function ProdcutRow({ product }) {
  console.log(product);
  return (

<table style={{width: '100%', backgroundColor: 'lightgray'}}>

  <tbody>
  <tr  style={{width: '100%', backgroundColor: 'white'}}>
    
      <td style={{width: '50%'}}> {product.name} </td>
      <td style={{width: '50%'}}> {product.price} </td>
  </tr>
  </tbody>

</table>
     
  );
}
export default ProdcutRow;
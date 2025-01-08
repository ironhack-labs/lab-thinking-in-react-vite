import ProductRow from "./ProductRow";

function ProductTable({products}){
  return (
  <table style={{width: '100%', backgroundColor: 'lightgray'}}>

     <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
       </tr>
     </thead>
     
     <tbody>
         {products.map((product) => {return <ProductRow key={product.id} product={product}/>})}
     </tbody>
     

 </table>
 )
}

export default ProductTable;
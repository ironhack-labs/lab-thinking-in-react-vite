import ProductRow from "./ProductRow";

function ProductTable({products}){
return (
 <div className="product-table">
 <table style={{ backgroundColor: 'lightgray'}}>

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
 </div>
)}

export default ProductTable;
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
    return (
        <table>
        <thead>
          <tr className="table">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {props.allProducts.map(productDetails => {
            return <ProductRow key={productDetails.id} product={productDetails} />

        
})}
</tbody>
</table>
    )
}

export default ProductTable;

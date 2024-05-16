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
        {props.map(productDetails => {
            return (

            <tr className="table" key={productDetails.id}>
            <ProductRow product={productDetails} />

            </tr>)
})}
</tbody>
</table>
    )
}

export default ProductTable;

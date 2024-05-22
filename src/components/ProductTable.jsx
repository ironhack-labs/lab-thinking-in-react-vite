import ProductRow from "./ProductRow";

const ProductTable = ({products}) => {
  const productRows = products.map(product => (
    <ProductRow key={product.name} product={product} />
  ));
    return (
      <table>
      <thead>
        <tr>
          <th>Name</th>

          <th>Price</th>

        </tr>
      </thead>
      <tbody>
        {productRows}
      
      </tbody>
    </table>
    )
}
export default ProductTable;
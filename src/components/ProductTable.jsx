import ProductRow from "./ProductRow";

function ProductTable({products, search, stock}) {
  return (
    <table className="table table-striped table-hover table-light">
        <thead>
            <tr className="table-primary">
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                </tr>
        </thead>
        <tbody>
          {products
            .filter((p) => p.name.includes(search))
            .filter((p) => (stock ? p.inStock : true))
            .map((product) => (
              <ProductRow
                key={product.id}
                price={product.price}
                name={product.name}
                inStock={product.inStock}
              />
          ))}
        </tbody>
        </table>
  );
}

export default ProductTable;

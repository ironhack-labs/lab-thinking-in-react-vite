import ProductRow from "./ProductRow";

function ProductTable({ products, searchText, checkStock }) {
    return (
        <div className="d-flex justify-content-center">
            <table className="table text-center">
            <thead className="table-light">
                <tr>
                    <th> Name </th>
                    <th> Price </th>
                </tr>
            </thead>
            <tbody>
                {products
                .filter( p => p.name.toLowerCase().includes( searchText.toLowerCase() ))
                .filter( p => checkStock ? p.inStock : true )
                .map( product => (
                    <ProductRow key={product.id} product={product} />
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default ProductTable;
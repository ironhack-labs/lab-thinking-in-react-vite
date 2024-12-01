function ProductRow({ product }) {
    const { name, price, inStock } = product;
    return (
        <tr>
            <td className={`${!inStock ? "text-danger fw-bold" : ""}`}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow;


function ProductRow ({name, price, inStock}) {
    return (
            <tr>
                <th scope="col" style={{ color: inStock ? "black" : "red" }}>{name}</th>
                <th scope="col">{price}</th>
                </tr>
    )
}

export default ProductRow;
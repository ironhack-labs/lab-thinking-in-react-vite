const ProductRow = props => {
    return (
        <div>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </div>
    )
}

export default ProductRow;
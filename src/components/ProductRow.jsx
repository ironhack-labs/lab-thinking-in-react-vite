const ProductRow = props => {
    return (
        <tr className="table">
            <td>{props.product.name} {props.product.inStock ? style={color: 'red'} : style={color: 'black'}}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductRow;
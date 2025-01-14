import './ProductRow.css'

function ProductRow ({product}) {
    return(
        <>
           <tr>
            <td className={`switch ${product.inStock === false ? 'color' : '' }`} >{product.name}</td>
            <td >{product.price}</td>
          </tr>           
        </>
    )
}

export default ProductRow
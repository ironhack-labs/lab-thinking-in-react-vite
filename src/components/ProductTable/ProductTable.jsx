import ProductRow from "../ProductRow/ProductRow"

function ProductTable ({products}) {
    

    return(
        <table>  
            <thead>
                <tr>
                <th>name</th>
                <th>price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <ProductRow key={product.id} product={product}
                    />
                ))}
                
               
                
               
            </tbody>
        </table>
    )
}

export default ProductTable
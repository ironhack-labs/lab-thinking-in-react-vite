import React from 'react'

function ProductRow({products}) {
  return (
    <>
    <table style={{width: '100%'}}>
      <thead style={{backgroundColor: '#E7ECEF'}}>
        <tr>
          <th width="50%" style={{padding: '16px', fontWeight: 'bolder'}}>Name</th>
          <th width="50%" style={{padding: '16px', fontWeight: 'bolder'}}>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          products && (
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td style={{padding: '16px', color: !product.inStock && 'red'}}>{product.name}</td>
                  <td style={{padding: '16px'}}>{product.price}</td>
                </tr>
              )
            })
          )
        }

      </tbody>
    </table>
    </>
  )
}

export default ProductRow
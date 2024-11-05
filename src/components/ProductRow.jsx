export default function ProductRow() {
  return (
    <div>
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        {/* <td>{product.inStock ? "Yes" : "No"}</td> */}
      </tr>
    </div>
  );
}

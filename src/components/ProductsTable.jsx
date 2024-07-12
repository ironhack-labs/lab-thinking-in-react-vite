import ProductRow from "./ProductRow";

export default function ProductsTable({products}) {
  console.log(products);
  return (
    products.map((product) => (
       <ProductRow product={product} />
      ))
  )
}

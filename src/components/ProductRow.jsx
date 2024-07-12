export default function ProductRow({ product }) {
  console.log(product);
  return (
    <div key={product.id} className="flex flex-col gap-4">
      <div className="flex items-center justify-around">
        {product.inStock ? (
          <h2 className="text-lg font-bold">{product.name}</h2>
        ) : (
          <h2 className="text-lg text-red-500 font-bold">{product.name}</h2>
        )}
        <p className="text-sm text-gray-500">{product.price}</p>
      </div>
    </div>
  );
}

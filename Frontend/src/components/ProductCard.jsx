import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, setIsCartOpen } = useCart();
  return (
    <div className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <div className="h-52 overflow-hidden bg-gray-100">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="h-full w-full object-cover group-hover:scale-105 transition"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm line-clamp-1">
          {product.title}
        </h3>

        <p className="text-gray-500 text-xs">
          {product.category?.name}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-bold text-lg">
            ₹{product.price}
          </span>

          <button
            onClick={() => {
              addToCart(product, 1);
              setIsCartOpen(true);
            }}
            className="text-sm border px-3 py-1 rounded-lg
                       hover:bg-black hover:text-white transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

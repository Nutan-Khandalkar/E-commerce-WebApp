import { useEffect, useState } from "react";
import { fetchProducts, fetchProductsByCategory } from "../api/fakeApi";
import ProductCard from "../components/ProductCard";
import { useCategoryContext } from "../contexts/CategoryContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { selectedCategory } = useCategoryContext();

  const token=localStorage.getItem("token");
  if(!token) return window.location.href="http://localhost:5173/login";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const fetchData = selectedCategory
          ? fetchProductsByCategory(selectedCategory)
          : fetchProducts();

        const data = await fetchData;
        if (!controller.signal.aborted) {
          setProducts(data);
        }
      } catch {
        if (!controller.signal.aborted) {
          setProducts([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    })();

    return () => controller.abort();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold mb-6">
        Latest Products
      </h1>

      {Array.isArray(products) && products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-5xl mb-4">📭</p>
          <p className="text-gray-500 text-lg">No products found</p>
          <p className="text-gray-400 text-sm">Try selecting a different category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(products) &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}

    </main>
  );
}

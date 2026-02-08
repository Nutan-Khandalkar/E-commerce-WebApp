import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "../api/fakeApi";
import { useCategoryContext } from "../contexts/CategoryContext";
import { useCart } from "../contexts/CartContext";

export default function Navbar() {
    const [categories, setCategories] = useState([]);
    const { selectedCategory, setSelectedCategory } = useCategoryContext();
    const { cartItems } = useCart();

    const itemCount = Array.isArray(cartItems)
        ? cartItems.reduce((sum, it) => sum + (it.qty || 1), 0)
        : 0;

    useEffect(() => {
        fetchCategories()
            .then((res) => setCategories(res))
            .catch(() => setCategories([]));
    }, []);

    return (
        <nav className="w-full sticky top-0 z-50 bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Brand */}
                <Link
                    to="/"
                    className="text-2xl font-extrabold tracking-tight text-gray-900"
                >
                    E-Commerce
                </Link>

                {/* Categories */}
                <div className="hidden md:block">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-black
                       hover:border-gray-400 transition"
                    >
                        <option value="">All Categories</option>
                        {Array.isArray(categories) &&
                            categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))}
                    </select>
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-6">

                    {/* Cart */}
                    <Link to="/cart" className="relative text-xl hover:scale-105 transition">
                        🛒
                        <span
                            className="absolute -top-2 -right-3 min-w-4.5 h-4.5
                         bg-black text-white text-[11px]
                         flex items-center justify-center
                         rounded-full"
                        >
                            {itemCount}
                        </span>
                    </Link>

                    {/* Login */}
                    <Link
                        to="/login"
                        className="rounded-lg border border-gray-900 px-4 py-2 text-sm
                       font-medium hover:bg-gray-900 hover:text-white
                       transition"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </nav>
    );
}

import React, { useEffect, useRef, useState } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";
import ProductLoadingSkeleton from "./ProductLoadingSkeleton";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { FiSliders, FiShoppingBag } from "react-icons/fi";

export const ProductsList = () => {
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );

        setOriginalProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  useEffect(() => {
    if (!debouncedSearchTerm.trim()) return;

    const fetchSearchResults = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${debouncedSearchTerm}`
        );

        setSearchResults(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [debouncedSearchTerm]);

  const products = debouncedSearchTerm.trim()
    ? searchResults
    : originalProducts;

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  if (loading && originalProducts.length === 0) {
    return <ProductLoadingSkeleton />;
  }

  return (
    <section className="min-h-screen bg-[#f8f8fa] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* HERO HEADER */}
        <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-pink-500 to-rose-400 px-6 py-10 text-white shadow-xl shadow-pink-100 sm:px-10 sm:py-12">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">
              Premium Collection
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Find Something You’ll Love
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-pink-100 sm:text-base">
              Discover our carefully selected collection of products,
              designed to make your everyday shopping simple and enjoyable.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
                <FiShoppingBag className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {products.length} Products
                </span>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-white/10" />
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="relative w-full lg:max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
              <AiOutlineSearch className="h-5 w-5 text-pink-500" />
            </div>

            <input
              ref={searchRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-13 pr-12 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 flex items-center pr-5 text-gray-400 transition hover:text-pink-600"
              >
                <AiOutlineClose className="h-5 w-5" />
              </button>
            )}
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-pink-200 hover:text-pink-600"
          >
            <FiSliders className="h-4 w-4" />
            Filter Products
          </button>
        </div>

        {/* SEARCH INFO */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            {searchTerm ? (
              <p className="text-sm text-gray-500">
                Search results for{" "}
                <span className="font-semibold text-gray-900">
                  "{searchTerm}"
                </span>
              </p>
            ) : (
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {products.length}
                </span>{" "}
                products
              </p>
            )}
          </div>

          <p className="hidden text-sm text-gray-400 sm:block">
            Explore our collection
          </p>
        </div>

        {/* PRODUCTS */}
        {loading ? (
          <ProductLoadingSkeleton />
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-100 hover:shadow-xl hover:shadow-gray-200/60"
              >
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="rounded-3xl border border-gray-200 bg-white px-6 py-20 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50">
              <AiOutlineSearch className="h-7 w-7 text-pink-500" />
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              No products found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              We couldn't find any products matching your search.
              Try another product name.
            </p>

            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mt-6 rounded-xl bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-700"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
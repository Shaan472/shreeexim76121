"use client";

import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import { FaFilter, FaSearch } from 'react-icons/fa';

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  unit: string;
  category: string;
  inStock: boolean;
  featured: boolean;
}

export default function VegetablesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products?category=vegetables');
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price || 0) - (b.price || 0);
        case 'price-high':
          return (b.price || 0) - (a.price || 0);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Fresh Vegetables</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Premium quality vegetables sourced from the finest farms, ready for export worldwide.
            </p>
          </div>
        </div>
      </section>

 {/* Vegetables Information Section */}
 <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vegetables</h2>
        <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Vegetables are the edible parts of herbaceous plants, such as leaves, stems, roots, flowers, and bulbs, which are consumed for their nutritional value, including vitamins, minerals, fiber, and antioxidants.
                </p>
              </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <img 
                src="/images/vegetable.jpg" 
                alt="Fresh Vegetables"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Content Section */}
            <div className="order-1 lg:order-2">
              
              {/* Main Content */}
              
              
              {/* Points Section */}
              <div className="space-y-4">
                {/* <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits:</h3> */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                    <span className="text-gray-700">Vegetables are excellent sources of essential nutrients, including vitamins (A, C), minerals (calcium, iron), fiber, and antioxidants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                    <span className="text-gray-700">A diet rich in vegetables can help lower blood pressure, reduce the risk of heart disease and stroke, and prevent some types of cancer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                    <span className="text-gray-700">They are often added to soups, stews, casseroles, and other dishes, or consumed as snacks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                    <span className="text-gray-700">The fiber in vegetables helps maintain a healthy digestive system and can prevent constipation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">5</span>
                    <span className="text-gray-700">They are low in calories and fat, helping with weight management and promoting a healthy gut and regular digestion.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">6</span>
                    <span className="text-gray-700">Incorporating a variety of vegetables into your daily meals is a natural and effective way to stay healthy and strong.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">7</span>
                    <span className="text-gray-700">Many vegetables can be eaten raw, as in salads, or are cooked in various ways, including boiling, steaming, or grilling.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search vegetables..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            {/* <div className="flex items-center gap-4">
              <FaFilter className="text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="featured">Featured First</option>
              </select>
            </div> */}
          </div>
        </div>
      </section>

     

      {/* Products Grid */}
      <section className="py-12">
        
        <div className="container mx-auto px-6">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🥬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No vegetables found</h3>
              <p className="text-gray-600">
                {searchTerm ? 'Try adjusting your search terms.' : 'Check back soon for new products!'}
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {searchTerm ? `Search results for "${searchTerm}"` : 'Our Vegetable Products'}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Vegetables?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure the highest quality standards for all our vegetable exports.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Organic Certified</h3>
              <p className="text-gray-600">All our vegetables are grown using organic farming practices.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Efficient cold chain logistics ensure freshness upon arrival.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control processes guarantee premium products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Export Vegetables?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your vegetable export requirements and get competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact-us" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Quote
            </a>
            <a 
              href="/spices" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition"
            >
              View Spices
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

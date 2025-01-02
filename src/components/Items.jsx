import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/Context';
import Footer from './Footer';
import Header from './Header';

function Items() {
  const { id } = useParams();
  const { mockApi } = useCart();
  const [categoryData, setCategoryData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    if (mockApi && mockApi.length > 0) {
      const data = mockApi.find((item) => item.id === id);
      setCategoryData(data);
      setIsLoading(false); 
    }
  }, [mockApi, id]);

  if (isLoading) {
    return (
      <div>
        <Header />
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4 animate-pulse bg-gray-300 h-8 w-1/3"></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 animate-pulse"
              >
                <div className="bg-gray-300 rounded-t-lg w-full h-40 mb-4"></div>
                <div className="bg-gray-300 h-6 w-3/4 mx-auto rounded"></div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">{categoryData.category} Subcategories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryData.subcategories.map((subcategory, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer"
            >
              <h2 className="text-xl font-semibold ">{subcategory}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Items;

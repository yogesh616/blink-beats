import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/Context';

function Spotlight() {
  const { mockApi } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({}); // Tracks image loading status

  useEffect(() => {
    if (mockApi && mockApi.length > 0) {
      setIsLoading(false);
    }
  }, [mockApi]);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div>
        <h2 className="text-lg ps-5 font-bold">Spotlight</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer animate-pulse"
              >
                <div className="bg-gray-300 rounded-t-lg w-full h-40 mb-4"></div>
                <div className="bg-gray-300 h-6 w-3/4 mx-auto rounded"></div>
              </div>
            ))
          : mockApi.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => navigate(`/${item.id}`)}
              >
                <div className="relative w-full h-40 mb-4">
                  {/* Skeleton loader */}
                  {!loadedImages[item.id] && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-300 rounded-t-lg animate-pulse"></div>
                  )}
                  <img
                    src={item.image}
                    alt={item.category}
                    className={`rounded-t-lg w-full h-40 object-cover scale-95 transition-all duration-300 ${
                      loadedImages[item.id] ? 'hover:scale-100' : 'hidden'
                    }`}
                    onLoad={() => handleImageLoad(item.id)}
                  />
                </div>
                <h2 className="text-xl font-semibold text-center hover:text-orange-400 transition-all duration-300">
                  {item.category}
                </h2>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Spotlight;

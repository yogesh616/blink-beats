import React, { useState } from 'react';

const categories = [
  {
    name: 'Media',
    items: [
      { name: 'Print Media' },
      { name: 'Electronics Media' },
      { name: 'Digital Media'},
      { name: 'PR Services'}
    ],
  },
  {
    name: 'Advertising',
    items: [
      { name: 'Outdoor Advertising' },
      { name: 'Signage Advertising' },
      { name: 'Transit Advertising'}, 
      { name: 'Non Traditional Advertising'}, 
      { name: 'Hoarding Advertising' },
    ],
  },
  {
    name: 'Marketing',
    items: [
     { name: 'Branding Services' },
      { name: 'Graphic Design' },
      { name: 'LeafLets & Canopy'},
    ],
  },
  {
    name: 'Event',
    items: [
      { name: 'Conference' },
      { name: 'Workshop' },
      { name: 'Shows'},
      { name: 'Exhibitions'},
      { name: 'Cultural'},
      { name: 'Sports'},
    ],
  },
  { 
    name: 'Entertainment',
    items: [
      { name: 'Podcast' },
      { name: 'Ad Films' },
      { name: 'Short Stories'},
      { name: 'Web Series'},
      { name: 'Content Creation'},
      
    ],
  }
];

function Spotlight() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleAddClick = (itemName) => {
    alert(`${itemName} added to cart!`);
  };

  const activeItems = categories.find((category) => category.name === activeCategory)?.items || [];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="min-w-1/4 bg-gray-100 p-4">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category.name}
              className={`p-2 rounded cursor-pointer ${
                activeCategory === category.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        <h2 className="text-lg font-bold mb-4">{activeCategory}</h2>
       <div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[400px]"
>
  {activeItems.map((item) => (
    <div
      key={item.name}
      className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg"
    >
      <div className="w-full h-40 bg-gray-200 rounded mb-4"></div>
      <h3 className="text-md font-semibold text-center mb-2">{item.name}</h3>

      <div className="flex justify-end items-center w-full">
        <button
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
          onClick={() => handleAddClick(item.name)}
        >
          View More
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Spotlight;

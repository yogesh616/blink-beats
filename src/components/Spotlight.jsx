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
    <div className="flex lg:px-56 "  >
      {/* Sidebar */}
      <div className="min-w-1/4 bg-white p-4 mt-12 "
        style={{border: '1px solid rgb(238, 238, 238)'}}
      >
        <ul className="space-y-2" style={{borderBottom: '1px solid #eee'}}>
          {categories.map((category) => (
            <li
              key={category.name}
              style={{borderBottom: '1px solid rgb(238, 238, 238)'}}
              className={`p-2 lg:min-w-64 text-sm max-w-20 min-h-16 rounded cursor-pointer 
                ${
                  activeCategory === category.name
                    ? "bg-customGreen text-black lg:border-l-2 lg:border-r-0 border-r-2 border-green-700"
                    : "hover:bg-customGreen"
                }
              `}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-fll py-1 px-2">
        <h2 className="text-lg font-bold text-gray-700 mb-4 pb-3" style={{borderBottom: '2px solid  rgb(244, 246, 251)'}}>{activeCategory}</h2>
        <div
  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-4 md:gap-6 lg:gap-10 p-2"
  style={{
    background: "rgb(244, 246, 251)",
    padding: "8px",
    overflowX: "hidden",
  }}
>
  {activeItems.map((item) => (
    <div
      key={item.name}
      className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition-all duration-500 lg:max-w-40 lg:max-h-72 bg-white w-full max-h-64"
      
    >
      <div
        className="w-full bg-gray-200 rounded-lg mb-4"
        style={{
          height: "120px",
          transition: "transform 0.5s",
        }}
      ></div>
      <h3
        className="text-md font-semibold text-center mb-2"
        style={{
          fontSize: "14px",
        }}
      >
        {item.name}
      </h3>
      <div className="flex justify-center items-center w-full">
        <button
          className="px-4 py-1 text-sm rounded hover:text-green-600"
          style={{
            border: "1px solid rgb(49, 134, 22)",
            color: "rgb(49, 134, 22)",
          }}
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

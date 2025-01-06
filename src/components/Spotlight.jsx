import React, { useState } from "react";

const categories = [
  {
    name: "Media",
    items: [
      { name: "Print Media" },
      { name: "Electronics Media" },
      { name: "Digital Media" },
      { name: "PR Services" },
    ],
  },
  {
    name: "Advertising",
    items: [
      { name: "Outdoor Advertising" },
      { name: "Signage Advertising" },
      { name: "Transit Advertising" },
      { name: "Non Traditional Advertising" },
      { name: "Hoarding Advertising" },
    ],
  },
  {
    name: "Marketing",
    items: [
      { name: "Branding Services" },
      { name: "Graphic Design" },
      { name: "LeafLets & Canopy" },
    ],
  },
  {
    name: "Event",
    items: [
      { name: "Conference" },
      { name: "Workshop" },
      { name: "Shows" },
      { name: "Exhibitions" },
      { name: "Cultural" },
      { name: "Sports" },
    ],
  },
  {
    name: "Entertainment",
    items: [
      { name: "Podcast" },
      { name: "Ad Films" },
      { name: "Short Stories" },
      { name: "Web Series" },
      { name: "Content Creation" },
    ],
  },
];

function Spotlight() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleAddClick = (itemName) => {
    alert(`${itemName} added to cart!`);
  };

  const activeItems =
    categories.find((category) => category.name === activeCategory)?.items || [];

  return (
    <div className="flex w-full px-4 lg:px-16 lg:pe-12">
      {/* Sidebar */}
      <div
        className="lg:w-1/6 bg-white py-2 mt-4"
        style={{ border: "1px solid rgb(238, 238, 238)" }}
      >
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category.name}
              className={`p-3 text-sm rounded cursor-pointer text-center font-medium transition-all 
                ${
                  activeCategory === category.name
                    ? "bg-green-100 border-r-4 lg:border-l-4 lg:border-r-0 border-green-500"
                    : "hover:bg-green-100"
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
      <div className="lg:w-5/6 p-4">
        <h2
          className="text-lg font-bold text-gray-700 mb-4 pb-3"
          style={{ borderBottom: "2px solid rgb(244, 246, 251)" }}
        >
          {activeCategory}
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6"
          style={{
            background: "rgb(244, 246, 251)",
            padding: "8px",
          }}
        >
          {activeItems.map((item) => (
            <div
              key={item.name}
              className="border rounded-lg p-4 flex flex-col justify-between bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder for Product Image */}
              <div
                className="w-full bg-gray-200 rounded-lg mb-4"
                style={{
                  height: "120px",
                }}
              ></div>
              {/* Product Info */}
              <h3
                className="lg:text-lg font-semibold text-center mb-2"
                style={{
                  fontSize: "10px",
                }}
              >
                {item.name}
              </h3>
              {/* Add Button */}
              <div className="flex items-center justify-center">
                <button
                  className="bg-green-600 text-white lg:text-sm px-2 py-1 rounded hover:bg-green-700"
                  onClick={() => handleAddClick(item.name)}
                >
                  VIEW
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

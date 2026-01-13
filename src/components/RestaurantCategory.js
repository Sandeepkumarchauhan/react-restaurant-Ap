import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCategory = ({ title, items = [], showItems, setShowIndex }) => {
  useContext(UserContext);

  return (
    <div className="my-5 border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
      
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center px-5 py-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={setShowIndex}
      >
        <h2 className="font-semibold text-lg text-gray-800">
          {title} <span className="text-gray-500">({items.length})</span>
        </h2>
        <span className="text-gray-500 text-sm">
          {showItems ? "▲" : "▼"}
        </span>
      </div>

      {/* Accordion Content */}
      {showItems && (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-4 bg-white hover:shadow-md transition-all"
              >
                {/* Image */}
                {item.image && (
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />

                    {/* Offer Badge */}
                    {item.offer && (
                      <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                        {item.offer}
                      </span>
                    )}

                    {/* Add button */}
                    <button 
                    className ="absolute top-2 right-2 w-20 h-7
                                bg-black text-white text-sm font-semibold
                              rounded shadow flex items-center justify-center
                            hover:bg-gray-900"

                    onClick={() => console.log("Add item:", item.name)}
                    >
                      Add  +
                    </button>

                  </div>
                )}

                {/* Item Info */}
                <div className="mt-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {item.name}
                    </h3>

                    {/* ⭐ Avg Rating  */}
                    {item.avgRating && (
                      <span className="flex items-center gap-1 text-sm font-semibold text-gray-800 whitespace-nowrap">
                        <span className="relative inline-flex w-5 h-5">
                          <span className="absolute inset-0 bg-green-600 rounded-full"></span>

                          <svg
                            viewBox="0 0 24 24"
                            className="absolute inset-0 m-auto w-3 h-3 text-white"
                            fill="currentColor"
                          >
                            <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63L22 9.24l-5.46 4.73 1.64 7.03z" />
                          </svg>
                        </span>

                        {item.avgRating}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;

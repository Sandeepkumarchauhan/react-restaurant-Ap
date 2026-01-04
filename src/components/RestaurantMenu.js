import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const {
    name = "Restaurant",
    cuisines = [],
    price = "-",
    avgRating = "-",
    deliveryTime = "-",
    image,
    menu = {},
  } = resInfo;

  const categories = Object.entries(menu);

  return (
    <div className="pt-24 px-4 md:px-12 max-w-5xl mx-auto">

      {/* 🔝 Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-full md:w-40 h-36 md:h-28 object-cover rounded-lg"
        />

        <div>
          <h1 className="font-bold text-2xl md:text-3xl">{name}</h1>

          {/* Meta info with PERFECT rating badge */}
          <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-700 mt-1">
            <span>{cuisines.join(", ")}</span>
            <span>| {price}</span>

            {/* ⭐ PERFECT GREEN DOT RATING */}
            <span className="flex items-center gap-1">
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
              {avgRating}
            </span>

            <span>| ⏱ {deliveryTime} mins</span>
          </div>
        </div>
      </div>

      {/* 🍽 Menu Categories */}
      {categories.map(([title, items], index) => (
        <RestaurantCategory
          key={title}
          title={title}
          items={items}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

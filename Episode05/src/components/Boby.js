import { useEffect, useState } from "react";
import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./shimmar.js";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurants) =>
    restaurants?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterdRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    //optional chaining
    setAllRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Seach your Food..."
          value={searchText}
          onChange={(e) => {
            //e is event property. by e we can read ,  whatever i am typing in the input
            // console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //updatw the data
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {filterdRestaurants.map((restaurant) => {
          return (
            //<RestaurantCard {...restaurant.data} key={restaurant.data.id} />

            //key should be in your parent map jsx that we map, in this case LINK is the parent jsx so key should near at <Link>
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

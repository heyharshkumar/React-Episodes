import { useState } from "react";
import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard.js";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurants) =>
    restaurants.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  //let searchTxt = "khfc";
  // This is simple js code, but this is not work on react.Because this is not change itself

  //React variable need
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
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
            const data = filterData(searchText, restaurants);
            //updatw the data
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;

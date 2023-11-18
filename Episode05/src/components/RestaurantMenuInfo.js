import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URl } from "../contants";
import Shimmer from "./shimmar";
const RestaurantMenu = () => {
  const params = useParams();
  //   console.log(params);
  const { id } = params;

  //state var for changing api
  const [Restaurant, setRestaurant] = useState(null);
  //so i written in default is {}, but its wants the [] to be added in the default
  //console.log(Restaurant);

  useEffect(() => {
    getRestuarantInfo();
  }, []);

  async function getRestuarantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=80982&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    //console.log(json.data.cards[0].card.card.info);
    console.log(json);
    // setRestaurant(json.data.cards[0].card.card.info.name);
    setRestaurant(json.data);
  }
  return Restaurant === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant id:</h1>
      <h2>{Restaurant?.cards[0]?.card?.card?.info?.name}</h2>
      {/* <h2>{Restaurant}</h2> */}
    </div>
  );
};

export default RestaurantMenu;

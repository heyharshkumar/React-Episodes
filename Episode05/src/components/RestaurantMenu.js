import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmar";
import { MENUAPI } from "../contants";

const RestaurantMenu = () => {
  const params = useParams();
  //console.log(params);
  const { id } = params;

  //state var for changing api
  const [Restaurant, setRestaurant] = useState(null);
  //so i written in default is {}, but its wants the [] to be added in the default
  //console.log(Restaurant);

  useEffect(() => {
    getRestuarantInfo();
  }, []);

  async function getRestuarantInfo() {
    //this is hard coded api, it means it only contains one restuarant..
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=80982&catalog_qa=undefined&submitAction=ENTER"
    // );

    //this one is dynamic , because we add id that we get from useParams api for fetching the id that we enter in the url
    // const data = await fetch(
    //   in this url i written id in {} but it not written inside {}
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=" +
    //     id +
    //     "&catalog_qa=undefined&submitAction=ENTER"
    // );
    //in this url i written ...id... in {} but it not written inside {}
    //now add this  api in your constants files
    const data = await fetch(MENUAPI + id);
    const json = await data.json();
    //console.log(json);
    setRestaurant(json.data);
  }

  if (Restaurant === null) return <Shimmer />;
  const { name, city, avgRating, cuisines } =
    Restaurant?.cards[0]?.card?.card?.info;

  const { itemCards } =
    Restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      l<h1>Restaurant id:{cuisines.join(",")}</h1>
      <h2>{name}</h2>
      <h2>{city}</h2>
      <h2>{avgRating}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {" "}
            {item.card.info.name} - {"RS"} - {item.card.info.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li> */}
        <li>Burger</li>
      </ul>
      {/* <h2>{Restaurant}</h2> */}
    </div>
  );
};

export default RestaurantMenu;

import { IMG_CDN_URl } from "../contants";

const RestrauntCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  //hun nichyeo props aayia, ta apa hun props.restaurant kar dena instaed of restaurant[0]
  //then hun nichyeo restaurant ta aa hi rehya wa..apa sidha props di jagah restaurant likh skde
  //hun apa sidha paramter ch name likh do {}curly brackets ch jida name, cuisines etc
  // const { name, cuisines, lastMileTravelString, cloudinaryImageId } =
  //   restaurant.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URl + cloudinaryImageId} />
      <h2>{name}</h2>
      {/* <h3>{cuisines.join(" , ")}</h3> */}
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};
//--------------end-------------------

//manual data or hard coded data
// const RestrauntCard = () => {
//   return (
//     <div className="card">
//       <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
//       <h2>Burger King</h2>
//       <h3>Burger , American</h3>
//       <h4>5.4 Stars</h4>
//     </div>
//   );
// };

export default RestrauntCard;

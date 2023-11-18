import User from "./user";
import UserClass from "./UserClass";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <Outlet />
      <h1>About Us Page</h1>
      <p>Hello Everyone, This is My first Routing Page😍</p>
      {/* <User name={"functionl"} location={"kpt"} /> */}
    </div>
  );
};

export default About;

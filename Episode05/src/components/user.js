import { useState } from "react";
const User = ({ name, location }) => {
  const [count] = useState(5);
  const [count2] = useState(10);
  return (
    <div className="card-class">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h1>Name: Harsh from {name}</h1>
      <h1>Location: {location}</h1>
    </div>
  );
};

export default User;

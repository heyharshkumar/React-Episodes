import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     {
//         id: "tittle",
//     },
//     "heading 1 from parcel 1"
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id: "tittle",
//     },
//     "heading 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id: "container",
//     },
//     [heading, heading2]
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);

const tittle = (
  <h1 id="tittle" key="titt">
    Food Villa
  </h1>
);
// const HeadingComponent = () =>{
//     return {
//         <div>
//         {tittle}
//             <h1>HARSH 1</h1>
//             <h2>HArsh 2</h2>
//         </div>
//     }

// }
const HeadingComponent = () => {
  return (
    <div className="container">
      {tittle}
      <h1>Harsh 11</h1>
      <h2>Harsh 22</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

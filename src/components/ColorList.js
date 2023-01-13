import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
      </ol>
    </div>
  );
}

export default ColorList;

//using .map method to transform our array into jsx
// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   const colorElements = colors.map((color) => {
//     return <li style={{ color: color }}>{color}</li>;
//   });
//   return (
//     <div>
//       <h1>Top 5 CSS Colors</h1>
//       <ol>
//         {/* display the array of <li> elements here! */}
//         {colorElements}
//       </ol>
//     </div>
//   );
// }

// const colorElements = colors.map((color) => {
  // return (
    // <li key={color} style={{ color: color }}>
    //   {/* {color} */}
    // {/* </li> */}
  // );
// });
// }

//The key Prop this is to remove the wrning; each child in a list should have a unique "key" prop
//checking the render method of ColorList
// ColorItem component
// function ColorItem(props) {
//   return <li style={{ color: props.color }}>{props.color}</li>;
// }

// // ColorList component
// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   const colorElements = colors.map((color) => {
//     return <ColorItem key={color} color={color} />;
//   });
//   // etc
// }



// export default ColorList;




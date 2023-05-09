import React from "react";

function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    height: 50,
    /*  hex: backgroundColor.toString(16), */
  };

  return (
    <div style={divStyle}>
      rgb({props.r},{props.g},{props.b}) <br></br>
      {/* hex({valueToHex({props.r} + valueToHex({props.g}) + valueToHex({props.b}))}) */}
    </div>
  );
}

export default BoxColor;
/* r={255} g={0} b={0} */

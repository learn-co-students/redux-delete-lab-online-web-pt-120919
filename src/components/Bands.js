import React from "react";
import Band from "./Band";
const Bands = props => {
  return (
    <div>
      {props.bands.map(band => (
        <Band key={band.id} delete={props.delete} band={band} />
      ))}
    </div>
  );
};

export default Bands;

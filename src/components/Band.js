import React from 'react';

const Band = (props) => {
  return (
    <ul>
      <li>{props.band.name}</li>
      <button onClick={() => props.deleteBand(props.band.id)}>DELETE</button>
    </ul>
  );
};

export default Band;


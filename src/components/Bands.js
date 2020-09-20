import React from 'react';
import Band from './Band'

const Bands = (props) => {
    return (
        <div>
            {props.bands.map((band) => <Band band={band} deleteBand={props.deleteBand} key={band.id}/>)}
        </div>
    );
};

export default Bands;
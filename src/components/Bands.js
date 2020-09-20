import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  renderBands = () => this.props.bands.map(band => <Band name={band.name} key={band.id} id={band.id} deleteBand={this.props.deleteBand}/>)

  render() {
      console.log(this.props.bands)
    return(
      <div>
        {this.renderBands()}
      </div>
    );
  }
};

export default Bands
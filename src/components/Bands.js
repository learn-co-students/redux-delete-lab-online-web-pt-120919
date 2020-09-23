import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {

  renderBands = () => {
    return this.props.bands.map(band => <Band deleteBand={this.props.deleteBand} key={band.id} name={band.name} id={band.id} />)
  }

  render() {
    return(
      <div>
        {this.renderBands()}
      </div>
    );
  }

}

export default Bands;

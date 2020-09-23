import React, { Component } from "react";

class Band extends Component {
  render() {
    debugger;
    return (
      <div>
        <span>
          <li>{this.props.band.name}</li>
          <button onClick={() => this.props.delete(this.props.band.id)}>
            Delete
          </button>
        </span>
      </div>
    );
  }
}

export default Band;

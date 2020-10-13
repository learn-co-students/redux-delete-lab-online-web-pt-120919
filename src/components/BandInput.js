import React, { Component } from 'react';

class BandInput extends Component {

  state = {
   name: ''
  }

  handleOnChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
     name: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={(event) => this.handleOnChange(event)}
            name = "name"
            />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;

import React, { Component } from "react";

class CityDescription extends Component {
  constructor(props) {
    super(props);
    this.state = { cityDescription: "" };
  }

  componentDidMount() {
    fetch(
      `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${
        this.props.cityName
      }`
    )
      .then(res => res.json())
      .then(json => this.setState({ cityDescription: json[2][0] }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <p>
          {this.state.cityDescription === undefined
            ? "Unfortunately, we have no information about the place."
            : this.state.cityDescription}
        </p>
      </React.Fragment>
    );
  }
}
export default CityDescription;

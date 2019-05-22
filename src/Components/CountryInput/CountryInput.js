import React, { Component } from "react";
import MostPollutedCities from "./MostPollutedCities/MostPollutedCities";

class CountryInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedCountry: "",
      setCountryID: "",
      renderCities: ""
    };

    this.handleSubmitCountry = this.handleSubmitCountry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderCities = <p>Type a country!</p>;
    this.countryID = "";
  }

  handleSubmitCountry(event) {
    event.preventDefault();
    let countryName = this.state.typedCountry;
    switch (countryName) {
      case "Poland":
        this.forceUpdate();
        this.countryID = "PL";
        break;
      case "Germany":
        this.forceUpdate();
        this.countryID = "DE";
        break;
      case "France":
        this.forceUpdate();
        this.countryID = "FR";
        break;
      case "Spain":
        this.forceUpdate();
        this.countryID = "ES";
        break;
      default:
        alert(`Please type oneof this: Poland, Germany, France or Spain`);
    }
  }
  handleChange(event) {
    this.setState({ typedCountry: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmitCountry}>
          <label>
            Type Country (Poland, Germany, France and Spain available)
          </label>
          <br />
          <input
            type="text"
            value={this.state.typedCountry}
            onChange={this.handleChange}
            autoComplete="on"
          />
          <input type="submit" value="Submit" />
        </form>

        <MostPollutedCities countryID={this.countryID} />
      </React.Fragment>
    );
  }
}
export default CountryInput;

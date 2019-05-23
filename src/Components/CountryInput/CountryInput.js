import React, { Component } from "react";
import "./CountryInput.scss";
import MostPollutedCities from "./MostPollutedCities/MostPollutedCities";
import ReactAutocomplete from "react-autocomplete";

class CountryInput extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitCountry = this.handleSubmitCountry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.countryID = "";
  }
  componentWillMount() {
    if (sessionStorage.getItem("typedCountry") === null) {
      sessionStorage.setItem("typedCountry", "");
    }
  }
  handleSubmitCountry(event) {
    event.preventDefault();
    let countryName = sessionStorage.getItem("typedCountry").toLowerCase();
    switch (countryName) {
      case "poland":
        this.forceUpdate();
        this.countryID = "PL";
        break;
      case "germany":
        this.forceUpdate();
        this.countryID = "DE";
        break;
      case "france":
        this.forceUpdate();
        this.countryID = "FR";
        break;
      case "spain":
        this.forceUpdate();
        this.countryID = "ES";
        break;
      default:
        alert(`Please type oneof this: Poland, Germany, France or Spain`);
    }
  }
  handleChange(event) {
    sessionStorage.setItem("typedCountry", event.target.value);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="content__wrapper">
        <form onSubmit={this.handleSubmitCountry} className="content__form">
          <label className="form__label">
            Type a country <br />
            <span>(Poland, Germany, France and Spain available only)</span>
          </label>
          <br />

          <ReactAutocomplete
            items={[
              { id: "poland", label: "Poland" },
              { id: "germany", label: "Germany" },
              { id: "france", label: "France" },
              { id: "spain", label: "Spain" }
            ]}
            shouldItemRender={(item, value) =>
              item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.label}
            renderItem={(item, highlighted) => (
              <div
                className="form__list"
                key={item.id}
                // style={{
                //   backgroundColor: highlighted ? "#eee" : "transparent"
                // }}
              >
                {item.label}
              </div>
            )}
            value={sessionStorage.getItem("typedCountry")}
            onChange={this.handleChange}
            //onSelect={this.handleSelect}
          />

          <input type="submit" value="Submit" className="form__button" />
        </form>
        <MostPollutedCities
          countryID={this.countryID}
          className="content__cities-display"
        />
      </div>
    );
  }
}
export default CountryInput;

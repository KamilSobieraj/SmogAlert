import React, { Component } from "react";
import "./Form.scss";
import MostPollutedCities from "./MostPollutedCities/MostPollutedCities";
import ReactAutocomplete from "react-autocomplete";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleChangeMeasurement = this.handleChangeMeasurement.bind(this);
    this.countryID = "";
    this.measurement = "";
  }
  componentWillMount() {
    if (sessionStorage.getItem("typedCountry") === null) {
      sessionStorage.setItem("typedCountry", "");
    }
    if (sessionStorage.getItem("selectedMeasurement") === null) {
      sessionStorage.setItem("selectedMeasurement", "pm25");
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    let countryName = sessionStorage.getItem("typedCountry").toLowerCase();
    let measurement = sessionStorage.getItem("selectedMeasurement");

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
        alert(`Please type one of this: Poland, Germany, France or Spain`);
    }

    switch (measurement) {
      case "pm10":
        this.forceUpdate();
        this.measurement = "pm10";
        break;
      case "no2":
        this.forceUpdate();
        this.measurement = "no2";
        break;
      case "o3":
        this.forceUpdate();
        this.measurement = "o3";
        break;
      case "co":
        this.forceUpdate();
        this.measurement = "co";
        break;
      case "bc":
        this.forceUpdate();
        this.measurement = "bc";
        break;
      default:
        this.forceUpdate();
        this.measurement = "pm25";
        break;
    }
  }

  handleChangeCountry(event) {
    sessionStorage.setItem("typedCountry", event.target.value);
    this.forceUpdate();
  }
  handleChangeMeasurement(event) {
    sessionStorage.setItem("selectedMeasurement", event.target.value);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="content__wrapper">
        <form onSubmit={this.handleSubmit} className="content__form">
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
            renderItem={item => (
              <div className="form__list" key={item.id}>
                {item.label}
              </div>
            )}
            value={sessionStorage.getItem("typedCountry")}
            onChange={this.handleChangeCountry}
            //onSelect={this.handleSelect}
          />
          <input type="submit" value="Submit" className="form__button" />
          <br />
          <label className="form__label__parameter">Choose parameter</label>
          <br />
          <select
            value={sessionStorage.getItem("selectedMeasurement")}
            onChange={this.handleChangeMeasurement}
          >
            <option value="pm25">PM 2.5</option>
            <option value="pm10">PM 10</option>
            <option value="so2">SO2</option>
            <option value="no2">NO2</option>
            <option value="o3">O3</option>
            <option value="co">CO</option>
            <option value="bc">BC</option>
          </select>
        </form>
        <MostPollutedCities
          countryID={this.countryID}
          measurement={sessionStorage.getItem("selectedMeasurement")}
          className="content__cities-display"
        />
      </div>
    );
  }
}
export default Form;

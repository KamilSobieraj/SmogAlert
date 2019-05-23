import React, { Component } from "react";
import MostPollutedCities from "./MostPollutedCities/MostPollutedCities";
import ReactAutocomplete from "react-autocomplete";

class CountryInput extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitCountry = this.handleSubmitCountry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.countryID = "";
  }
  componentDidMount() {
    if (sessionStorage.getItem("typedCountry") === "") {
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
      <React.Fragment>
        <form onSubmit={this.handleSubmitCountry}>
          <label>
            Type Country (Poland, Germany, France and Spain are available)
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
                key={item.id}
                style={{
                  backgroundColor: highlighted ? "#eee" : "transparent"
                }}
              >
                {item.label}
              </div>
            )}
            value={sessionStorage.getItem("typedCountry")}
            onChange={this.handleChange}
            //onSelect={this.handleSelect}
          />
          <input type="submit" value="Submit" />
        </form>

        <MostPollutedCities countryID={this.countryID} />
      </React.Fragment>
    );
  }
}
export default CountryInput;

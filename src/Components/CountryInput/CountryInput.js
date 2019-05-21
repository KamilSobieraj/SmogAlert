import React from "react";
import MostPollutedCities from "./MostPollutedCities/MostPollutedCities";

const countryInput = props => {
  return (
    <React.Fragment>
      <form>
        <label>
          Type Country (Poland, Germany, France and Spain available)
        </label>
        <br />
        <input type="search" autoComplete="on" />
      </form>
      <MostPollutedCities countryID={"ES"} />
    </React.Fragment>
  );
};
export default countryInput;

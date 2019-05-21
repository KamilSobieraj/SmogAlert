import React, { Component } from "react";

class MostPollutedCities extends Component {
  state = { fetchedData: null };
  componentDidMount() {
    fetch(
      `https://api.openaq.org/v1/latest?limit=350&parameter=pm25&country=${
        this.props.countryID
      }`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({ fetchedData: json });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.fetchedData === null) {
      console.log("null");
    } else {
      const dataSortedByPM25 = this.state.fetchedData.results.sort((a, b) =>
        a.measurements[0].value > b.measurements[0].value ? -1 : 1
      );
      console.table(
        dataSortedByPM25.map(e => `${e.city} (${e.measurements[0].value})`)
      );
    }
    return <p>Cokolwiek</p>;
  }
}

export default MostPollutedCities;

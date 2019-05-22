import React, { Component } from "react";

class MostPollutedCities extends Component {
  constructor(props) {
    super(props);
    this.state = { fetchedData: null, countryID: this.props.countryID };
  }

  componentWillReceiveProps(props) {
    fetch(
      `https://api.openaq.org/v1/latest?limit=350&parameter=pm25&country=${
        props.countryID
      }`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({ fetchedData: json });
      })
      .catch(err => console.log(err));
  }

  render() {
    let displayCities;
    if (this.state.fetchedData === null) {
    } else {
      let dataSortedByPM25 = this.state.fetchedData.results.sort((a, b) =>
        a.measurements[0].value > b.measurements[0].value ? -1 : 1
      );
      displayCities = (
        <ol>
          {dataSortedByPM25.slice(0, 10).map(e => (
            <ul key={e.city + e.measurements[0].value}>
              {e.city} ({e.measurements[0].value})
            </ul>
          ))}
        </ol>
      );
      // console.table(
      //   dataSortedByPM25
      //     .slice(0, 10)
      //     .map(e => `${e.city} (${e.measurements[0].value})`)
      // );
    }
    return <h2>{displayCities}</h2>;
  }
}

export default MostPollutedCities;

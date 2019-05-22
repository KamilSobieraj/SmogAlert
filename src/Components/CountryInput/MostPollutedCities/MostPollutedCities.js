import React, { Component } from "react";
import CityDescription from "./CityDescription/CityDescription";
import "./MostPollutedCities.scss";
import { Accordion, Card } from "react-bootstrap";

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
        <Accordion>
          {dataSortedByPM25.slice(0, 10).map(e => (
            <Card>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={e.city + e.measurements[0].value}
              >
                {e.city} ({e.measurements[0].value})
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={e.city + e.measurements[0].value}>
                <Card.Body>
                  <CityDescription cityName={e.city} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      );
    }
    return <div>{displayCities}</div>;
  }
}

export default MostPollutedCities;

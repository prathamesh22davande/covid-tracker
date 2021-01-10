import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    //console.log(country);
    //fetch data
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    //console.log(fetchedData);
    //set data
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

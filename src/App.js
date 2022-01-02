import React from 'react'
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'
import styles from './App.module.css'

import omicronImage from './images/Omicron2.png'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <img src={omicronImage} alt='omicron' className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App

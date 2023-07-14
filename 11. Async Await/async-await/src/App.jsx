import { useState } from 'react'
import './App.css'

var count = 0;
function App() {
  const [countryData, setCountryData] = useState(null);

  async function fetchCountryData(countryName) {
    if(count == 0) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();
        setCountryData(data);
        } catch (error) {
          console.log("API error:", error);
      }
      count++;
    }
  };
  
  fetchCountryData('india')

    return (
      <div>
        {countryData ? (
          <>
            <h1>Country: {countryData[0].name.common}</h1>
            <img src={countryData[0].flags.svg} alt="Country Flag" width="200" />
            <h2>Capital: {countryData[0].capital}</h2>
            <h3>Population: {countryData[0].population.toLocaleString()}</h3>
          </>
        ):
        <h2>Loading...</h2>        
        }
      </div>
    );
}

export default App

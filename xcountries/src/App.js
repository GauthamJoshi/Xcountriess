import './App.css';
import Countries from './component/countries';
import { useEffect, useState } from 'react';

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const getCountriesFlag = async () => {
      try {
        const res = await fetch(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        const data = await res.json();
        console.log(data);
        
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching data:"); // Log error to console
      }
    };
    getCountriesFlag();
  }, []);

  return (
    <div>
      <div className="App">
        {countryData.map((Data) => {
          return <Countries Data={Data} key={Data.abbr || Data.png} />;
        })}
      </div>
    </div>
  );
}

export default App;
import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import InfoCard from './InfoCard'
import Catogeroy from './Catogeroy';
import {BarProvider} from './BarContext';

export default function App() {

  const [drinks, setDrinks] = useState([]);


  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const [filter, setFilter, searchTerm, setSearchTerm, searchResults] = useContext();

  return (

    <BarProvider>
          <div className="app">
          <h1 className="app__title">DilBar</h1>
          <input
            className="app__searchInput"
            type="text"
            placeholder="Enter your Ingredients..."
            onChange={handleChange}
            value={searchTerm}
          />

          {/* <Catogeroy filterFunction={setFilter} filterOption={setSearchTerm} /> */}

          {/* {console.log(filter, searchTerm)} */}

          <div className="app__search-card-results">
          {
            searchResults.map(drink => (
              <div className="app__search-card">
                  <InfoCard drink={drink.strDrink} img_url={drink.strDrinkThumb} />    
              </div>
            
          )
          )
          }
          </div>
        </div>
    </BarProvider>
    
  );
}



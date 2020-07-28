import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import InfoCard from './InfoCard'
import Catogeroy from './Catogeroy';
// import {BarProvider} from './BarContext';

export default function App() {

  const [drinks, setDrinks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState("i");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
      const ingrediants = async () => {
      await fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?${filter}=${searchTerm}`, {
          method: "GET",
          headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "22dc1cf4e3msha6eee43c752a385p18c288jsnb80a65af1601"
          }
      })
          .then(response => {
          return response.json();
          })
          .then(data => {
          setSearchResults(data.drinks);
          })
          .catch(err => {
          console.log(err);
          });
      };

      ingrediants();
  }, [filter, searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };



  return (


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

    
  );
}




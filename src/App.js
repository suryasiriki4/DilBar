import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import InfoCard from './InfoCard'
import Catogeroy from './Catogeroy';
import Alcholic from './Alcholic';
import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from './LoadingIndicator';


export default function App() {

  const [drinks, setDrinks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [filter, setFilter] = useState("i");
  const [searchTerm, setSearchTerm] = useState("");
  const [dataFound, setDataFound] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    
      const ingrediants =  async () => {
      
      await trackPromise(fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?${filter}=${searchTerm}`, {
          method: "GET",
          headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "22dc1cf4e3msha6eee43c752a385p18c288jsnb80a65af1601",
          }
      })
      .then(response => {
        setDataFound(true);
        return response.json();
      })
      .then(data => {
      setSearchResults(data.drinks);
      })
      .catch(err => {
      setDataFound(false);
      console.log(err);
      }));
      };      

      ingrediants();

  }, [searchTerm]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    setFilter("i");
    setSearchTerm(input);
    setInput("");
    event.preventDefault();
  };



  return (
          <div className="app">
          <h1 className="app__title">DilBar</h1>

          <div className="app__searchDiv">

              <form>
                  <input
                    className="app__searchInput"
                    type="text"
                    placeholder="Enter your Ingredients..."
                    onChange={handleChange}
                    autoFocus
                    value={input}
                  />

                  <button className="app__searchSubmission" type="submit" onClick={handleClick}>find my drink</button>
              </form>
          </div>

          <div className="app__filters">
            <Alcholic filterFunction={[filter,setFilter]} filterOption={[searchTerm,setSearchTerm]} />
            <Catogeroy filterFunction={[filter,setFilter]} filterOption={[searchTerm,setSearchTerm]} />
          </div>

          <LoadingIndicator/>

          {
            dataFound 
            ?
            (<div className="app__search-card-results">
            {
              searchResults.map(drink => (
                <div className="app__search-card">
                    <InfoCard id={drink.idDrink} drink={drink.strDrink} img_url={drink.strDrinkThumb} />    
                </div>            
            ))
            }
            </div>) 
            :
            null
          }
        </div>

    
  );
}





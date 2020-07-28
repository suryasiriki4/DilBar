import React, {useState, createContext, useEffect} from 'react';

export const BarContext = createContext();

export const BarProvider = (props) => {

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

    return(
        <BarContext.Provider value={[filter, setFilter, searchTerm, setSearchTerm, searchResults]}>
            {props.children}
        </BarContext.Provider>
    );
} 
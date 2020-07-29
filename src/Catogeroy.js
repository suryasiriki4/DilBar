import React, {useState, useEffect} from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import './Catogery.css';

function Catogeroy(props) {
    const [catogeryList, setCatogeryList] = useState([]);
    const [filter,setFilter] = props.filterFunction;
    const [searchTerm, setSearchTerm] = props.filterOption;

    useEffect(() => {
        const catogories = async () => {
            await fetch("https://the-cocktail-db.p.rapidapi.com/list.php?c=list", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "22dc1cf4e3msha6eee43c752a385p18c288jsnb80a65af1601"
                }
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setCatogeryList(data.drinks);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        
        catogories();
    },
    [catogeryList]
    )

    const handleClickFilter = () => {        
            setFilter("c");
    }

    const handleClickOption = (eventKey) => {
            setSearchTerm(eventKey);
    }

    return (
        <div>
           <DropdownButton id="dropdown-basic-button" onClick={handleClickFilter} title="Catogeries">
                {catogeryList.map(catogery => (
                    <Dropdown.Item className="dropdown-item" onSelect={handleClickOption} eventKey={catogery.strCategory}>{catogery.strCategory}</Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    )
}

export default Catogeroy;

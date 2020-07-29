import React, {useState, useEffect} from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

function Alcholic(props) {

    const [optionList, setOptionList] = useState([]);
    const [filter,setFilter] = props.filterFunction;
    const [searchTerm, setSearchTerm] = props.filterOption;

    
    useEffect(() => {
        const options = async () => {
            await fetch("https://the-cocktail-db.p.rapidapi.com/list.php?a=list", {
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
                    setOptionList(data.drinks);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        
        options();
    },
    [optionList]
    )

    const handleClickFilter = () => {        
            setFilter("a");
    }

    const handleClickOption = (eventKey) => {
       setSearchTerm(eventKey);
    }

    return (
        <div>
           <DropdownButton id="dropdown-basic-button" onClick={handleClickFilter} title="Alcholic Options">
                {optionList.map(option => (
                    <Dropdown.Item onSelect={handleClickOption} eventKey={option.strAlcoholic}>{option.strAlcoholic}</Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    )
}

export default Alcholic

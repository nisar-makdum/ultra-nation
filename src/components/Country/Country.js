import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: "80px"}
    const countryStyle = {border: "1px solid lightgray", margin:'10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style = {countryStyle}>
            <h4>This Is A {name}</h4>
            <img style = {flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;
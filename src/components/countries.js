import React, { useState, useEffect } from 'react'
const url = 'https://restcountries.com/v3.1/all';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const fetchCountryData = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        setCountries(countries);
    }
    useEffect(() => {
        fetchCountryData();
    }, [])
    return (
    <>
        {countries.map((country) => {
        const {region, name, population, flags, capital, ccn3} = country;
        return (
            <article key={ccn3}>
            <div>
                <img src={flags.png} alt={name.common} />
                <h3>{name.common}</h3>
                <h4>
                    Population: <span>{population}</span>
                </h4>
                <h4>
                    Region: <span>{region}</span>
                </h4>
                <h4>
                    Capital: <span>{capital}</span>
                </h4>
            </div>
        </article>
        )
    })}
    </>
    )
}

export default Countries

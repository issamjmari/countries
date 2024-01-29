import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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

    const removeCountry = (numCode) => {
        console.log(`numCode: `, numCode);
        const newCountryList = countries.filter((country) => country.ccn3 !== numCode);
        setCountries(newCountryList);
    };
    return (
    <>
        <section className="grid">
            {countries.map((country) => {
            const {region, name, population, flags, capital, ccn3} = country;
            return (
                <article key={ccn3}>
                <div>
                <div className='image'>
                    <img src={flags.png} alt={name.common} />
                </div>
                    <div className='details'>
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
                        <div className='buttons'>
                            <Link to={`/countries/${name}`} className='btn'>Learn more</Link>
                            <button className='btn' onClick={() => removeCountry(ccn3)}>Remove Country</button>
                        </div>
                    </div>
                </div>
            </article>
            )
        })}
        </section>
    </>
    )
}

export default Countries

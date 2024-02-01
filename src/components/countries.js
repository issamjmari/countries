import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const url = 'https://restcountries.com/v3.1/all';

let origCountries;

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountriesData = async () => {
        const response = await fetch(url);
        const countries = await response.json();
        origCountries = countries;
        setCountries(countries);
    }
    useEffect(() => {
        fetchCountriesData();
    }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        if(value === '') {
            setCountries(origCountries);
        }
        else {
            const FilteredCountries = origCountries.filter((country) => {
                return country.name.common.toLowerCase().startsWith(value.toLowerCase());
            });
            setCountries(FilteredCountries);
        }
    }

    const handleKeyUp = (event) => {
        const value = event.target.value;
        if (event.key === 'Backspace' || event.key === 'Delete') {
            if(value === '') {
                setCountries(origCountries);
            }
            else {
                const FilteredCountries = origCountries.filter((country) => {
                  return country.name.common.toLowerCase().startsWith(value.toLowerCase());
                });
                setCountries(FilteredCountries);
            }
        }
    };

    return (
    <>
        <section className="filter">
            <form className='form-control'>
                <input type="search" 
                name="search" 
                id="search" 
                placeholder='Search for a country'
                onChange={handleChange}
                onKeyUp={handleKeyUp} 
                />
            </form>
        </section>
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
                        <h3 className='countryName'>{name.common}</h3>
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
                            <Link className='btn' to={`/countries/${name.common}`}>Learn more</Link>
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

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
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log("Current window width: " + windowWidth + " pixels");
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

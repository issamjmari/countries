import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Country.css'


const Country = () => {
  const [country, setCountry] = useState([]);
  const {countryName} = useParams();

  const fetchCountryData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const country = await response.json()
    console.log(country);
    setCountry(country)
}
  useEffect(() => {
      fetchCountryData();
  })

return (
   <>
       <section className="country">
        <Link to='/' className='btn btn-light'>
           <i className='fas fa-arrow-left'></i>
           <span>Back</span>
       </Link>
           {
            country.map((c) => {
                  const {ccn3, name, population, 
                  region, subregion, capital, borders,
                  flags, tld, currencies, languages} = c;
                  const languageValues = Object.values(languages);
                  const currencyValues = Object.values(currencies);
                  console.log(borders);
                  return (
                    <article key={ccn3}>
                        <img src={flags.png} alt={name.common} className='countryImage'></img>
                        <div className='countryDetails'>
                          <div>
                            <h2>{name.common}</h2>
                            <h5>Native Name: <span>{name.common}</span></h5>
                            <h5>Population: <span>{population}</span></h5>
                            <h5>Region: <span>{region}</span></h5>
                            <h5>Sub Region: <span>{subregion}</span></h5>
                            <h5>Capital: <span>{capital}</span></h5>
                          </div>
                          <div>
                            <h5>Top Level Domain: <span className='tld'>
                            {tld.map((tldItem) => {
                                  return (
                                    <ul key={tldItem}>
                                      <li>{tldItem}</li>
                                    </ul>
                                  )
                              })}
                            </span></h5>
                            <h5>Currencies: <span>{currencyValues[0].name}</span></h5>
                            <h5>Languages: <span>{languageValues[0]}</span></h5>
                          </div>

                        </div>

                        <div className='borders'>
                            <h3>Border Countries: </h3>
                            <div className='listItems'>
                              {borders && borders.length && borders.map((border) => {
                                  return (
                                    <ul key={border}>
                                      <li>{border}</li>
                                    </ul>
                                  )
                              })}
                            </div>
                        </div>
                    </article>
                  )
               })
           }
       </section>
   </>
 ) 
}

export default Country

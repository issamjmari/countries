import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

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
  }, [])

return (
   <>
        <Link className='btn btn-light'>
           <i className='fas fa-arrow-left'></i>
           Back Home
       </Link>
       <section className="country">
           {
            country.map((c) => {
                  const {ccn3, name, population, 
                  region, subregion, capital,
                  flags, tld, currencies, languages} = c;
                  console.log(`name11: `, languages.fra);
                  return (
                    <article key={ccn3}>
                      <div>
                        <img src={flags.png} alt={name.common}></img>
                        <h5>{name.common}</h5>
                        <h2>Native Name: <span>{name.common}</span></h2>
                        <h2>Population: <span>{population}</span></h2>
                        <h2>Region: <span>{region}</span></h2>
                        <h2>Sub Region: <span>{subregion}</span></h2>
                        <h2>Capital: <span>{capital}</span></h2>
                      </div>
                      <div>
                        <h2>Top Level Domain: <span>{tld}</span></h2>
                        {/* <h2>Currencies: <span>{currencies[0].EUR.name}</span></h2> */}
                        {/* <h2>Languages: <span>{languages[0].name}</span></h2> */}
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

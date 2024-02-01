import React, { useState } from 'react'

const Filter = () => {
  const [countryNumber, setCountryNumber] = useState(0);

  const handleChange = (e) => {
      let matched = 0;
      const allcountries = document.querySelectorAll('.countryName');
      const value = e.target.value;
      if(value === '') setCountryNumber(0);
      allcountries.forEach((name) => {
        const isInvisible = name.innerHTML.toLowerCase().startsWith(value.toLowerCase());
        if(isInvisible)
        {
          matched++;
        }

      });
      setCountryNumber(matched);
  }
  return (
    <section className="filter">
        <form className='form-control'>
            <input type="search" 
            name="search" 
            id="search" 
            placeholder='Search for a country'
            onChange={handleChange} />
            {countryNumber !== 0 && countryNumber !== 250  && 
            <h5>{countryNumber} countries were found, please scroll down to see the rest</h5>}

        </form>
    </section>
  )
}

export default Filter

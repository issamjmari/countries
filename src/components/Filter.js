import React from 'react'

const Filter = () => {

  const handleChange = (e) => {
      const allcountries = document.querySelectorAll('.countryName');
      const value = e.target.value;
      console.log(`value: `, value);
      allcountries.forEach((name) => {
        if(name.innerHTML.toLowerCase().includes(value.toLowerCase()))
          name.parentElement.parentElement.style.display = 'block';
        else
          name.parentElement.parentElement.style.display = 'none';

      });
  }
  return (
    <section className="filter">
        <form className='form-control'>
            <input type="search" 
            name="search" 
            id="search" 
            placeholder='Search for a country'
            onChange={handleChange} />
        </form>
        <div className='region-filter'>
            <select name="select" id="select" className="select">
                <option value="Filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter

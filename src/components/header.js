import React from 'react'

const Header = () => {
  const changeTheme = () => {
    const moon = document.querySelector('.fa-moon');
    const header = document.querySelector('.header');
    const input = document.querySelector('.filter .form-control input');
    const select = document.querySelector('.filter .region-filter .select');
    const placeholder = document.querySelector('.filter .form-control input::placeholder');
    console.log('SADIII9: ', placeholder);
    document.body.classList.toggle('light-theme');
    header.classList.toggle('light-theme');
    input.classList.toggle('light-theme');
    select.classList.toggle('light-theme');
    placeholder.classList.toggle('light-theme');
  }
  return (
    <>
        <header className='header'>
            <div>
                <h1>Which country is it?</h1>
            </div>
            <div>
                <i className='fas fa-moon' onClick={() => changeTheme()}></i>
            </div>
        </header>
    </>
  )
}

export default Header

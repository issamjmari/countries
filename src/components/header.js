import React from 'react'

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector('.header');
    const input = document.querySelector('.filter .form-control input');
    const select = document.querySelector('.filter .region-filter .select');
    const details = document.querySelectorAll('.details');
    const buttons = document.querySelectorAll('.btn');
  
    document.body.classList.toggle('light-theme');
    header.classList.toggle('light-theme');
    input.classList.toggle('light-theme');
    select.classList.toggle('light-theme');

    details.forEach((detail) => {
      detail.classList.toggle('light-theme');
    });
    buttons.forEach((button) => {
      button.classList.toggle('light-theme');
    });
    
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

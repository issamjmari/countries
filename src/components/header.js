import React from 'react'
import img from '../static/img.png'

const Header = () => {

  return (
    <>
        <header className='header'>
            <div>
                <h1>Learn about countries</h1>
            </div>
            <div>
                <img src={img} alt='worldwide' 
                  style={{width: '50px', height: '50px'}}
                />
            </div>
        </header>
    </>
  )
}

export default Header

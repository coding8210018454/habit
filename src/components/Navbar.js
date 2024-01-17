import React from 'react';
import './styless/navbar.css';



const Navbar=()=>{

  const date = new Date()
    return(
        <>
          
          <div className='nav'>
            <h1> <img className ="image" src="images/poto.jpg" alt='logo' height='40px' />
              &nbsp; &nbsp; Habit<span className='track'>Trackrs</span>&nbsp; &nbsp;<i class="fa-solid fa-timeline"></i> &nbsp; &nbsp; by Md Shahid  &nbsp; &nbsp;
              <span className='date'>{date.toDateString()}</span>
              </h1>
          </div>

          
        
        </>
    )
}

export default Navbar;
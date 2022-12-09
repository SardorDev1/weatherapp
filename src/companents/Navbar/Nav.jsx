import React from 'react';
import Section from '../Section/Section';
import '../assets/style.css'
const Nav = () => {
    return (
       <>
    <div className="web-app">
    <header>
    <div className="header">
       <div className="container ">
  
      
  <nav className='row'>
      <div className="col-lg-6 col-md-6 mx-auto text-center  col-sm-12 pt-2">
         <div className="brand ">
       
          <img  width={50} height={50} src="https://sardordev-portfolio.herokuapp.com/images/logo.PNG" alt="Error logo" />
          <h1  >SardorDev</h1>
          
         </div>
      </div>
      <div className=" col-lg-6 col-md-6 col-sm-12  text-center pt-3">
          
      <h1 >Weather App</h1>

      </div>
  </nav>

</div>
       </div>

    </header>
<section>
<Section/>
</section>
    </div>
</>
    );
};



export default Nav;
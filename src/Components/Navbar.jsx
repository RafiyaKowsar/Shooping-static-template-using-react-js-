import React,{useState} from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);

  }

  return (
    <>


    {/* header section */}
    
        
   <div className="navbar">

      <div className="logo">
        <img src="/image.png"/>Shopping</div>
    <div className='center'>
      {/* Hamburger menu toggle */}
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to ="/Shop">shop</Link></li>
        <li><Link  to="/women">women</Link ></li>
         <li><Link  to="/men">men</Link ></li>
          <li><Link to="/kids">kids</Link ></li>
           <li><Link  to="/signin">signin</Link ></li>
        
      </ul>
    </div>
    </div>

              
 





           
           
 
     

   







    </>
  )
}

export default Navbar

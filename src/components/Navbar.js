import React from 'react'
import { Link } from 'react-router-dom'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
import css from './Navbar.module.css'
 


 
  
 const Navbar= () => {
      
    return (
        <>
    
     



     <div className={css.header}  >
            <Link className={css.link} to="/" >Home</Link>
            <Link className={css.link} to="/about" >About</Link>
            <Link className={css.link} to="/contact" >Contact</Link>
            <Link className={css.link} to="/product" >Product</Link>
             
         
        </div>
        </>
    )
}
export default Navbar;
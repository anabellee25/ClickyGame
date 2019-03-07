import React from 'react';
import './style.css';

function Footer () {
    return (
        <footer className="footer">
         <ul className= "row center list-inline">
           <li className=" col text-center list-inline-item">
             Sailor Moon Memory Game©
           </li>

           <li className="col list-inline-item">
              <p>Developed by Ana Lee</p>
              <a href="https://github.com/anabellee25">GitHub Profile</a>
           </li>
         </ul>
        </footer>
    );
};

export default Footer;
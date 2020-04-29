import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
           <ul className="navbar-nav">
               <li className="nav-item">
                   <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to="/sobre">Sobre</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-link" to="/produtos">Produtos</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-link" to="/contatos">Contatos</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-link" to="/formulario">Formulario</Link>
               </li>
           </ul>
       </nav>
    );
}

export default Nav
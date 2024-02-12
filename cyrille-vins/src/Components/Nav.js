import React from 'react';
import '../index.css';
import logo from '../images/logo.webp'

class Nav extends React.Component {
    render() {
        return     <div className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand px-5" href="#presentation">
                <img id="logo" src={logo} alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#presentation">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">Les domaines</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>;
    }
}

export default Nav;
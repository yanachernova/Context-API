import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src="http://pngimg.com/uploads/starwars/starwars_PNG21.png" width="80" height="80" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/people">People</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/vehicles">Vehicles</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
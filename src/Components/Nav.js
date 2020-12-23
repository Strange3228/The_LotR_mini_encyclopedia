import React from 'react';
import "../styles/Nav.css";
import {Link} from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <Link className="logo" to="/">
                <h1>The LotR</h1>
            </Link>
            <ul className="nav-right">
                <Link to="/">
                    <li>
                        <button>Books</button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <button>Films</button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <button>Characters</button>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
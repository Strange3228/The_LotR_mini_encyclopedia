import React from 'react';
import style from "../styles/nav.module.css";
import {Link} from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
            <Link className={style.logo} to="/">
                <h1>The LotR</h1>
            </Link>
            <ul className={style.navRight}>
                <Link to="/books">
                    <li>
                        <button className={style.navBtn}>Books</button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <button className={style.navBtn}>Films</button>
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        <button className={style.navBtn}>Characters</button>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
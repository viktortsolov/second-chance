import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import userContext from "../../contexts/userContext";

import './Header.css';

function Header() {
    let [user, setUser] = useContext(userContext);

    return (
        <header className="Header">
            <div className="header-wrapper">
                <Link to='/'>
                    <img className="logo" src='site-logo.png' alt="site logo" />
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <NavLink to='/Catalogue'>
                                Books <i className="fa-solid fa-book"></i>
                            </NavLink>
                        </li>
                        {user.uid !== 101 ?
                            <li>
                                <NavLink to='/MyBooks'>
                                    My Books <i className="fa-solid fa-address-book"></i>
                                </NavLink>
                            </li>
                            :
                            ''
                        }
                        <li>
                            <NavLink to='/Ask'>
                                Ask Us <i className="fa-solid fa-circle-question"></i>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contacts'>
                                Contact Us <i className="fa-solid fa-align-justify"></i>
                            </NavLink>
                        </li>
                        {user.uid === 101 ?
                            <>
                                <li>
                                    <Link to='/Login'>
                                        Log In <i className="fa-solid fa-door-open"></i>
                                    </Link>
                                </li>
                                <li>
                                    <NavLink to='/Register'>
                                        Register <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                    </NavLink>
                                </li>
                            </>
                            :
                            <li>
                                <Link to="/Logout">
                                    Log out <i className="fa-solid fa-door-closed"></i>
                                </Link>
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
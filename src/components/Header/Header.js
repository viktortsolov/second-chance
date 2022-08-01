import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
    return (
        <header className="Header">
            <div className="header-wrapper">
                <Link to='/'>
                    <img className="logo" src='site-logo.png' alt="site logo" />
                </Link>
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <Link to='/catalogue'>
                                Books <i className="fa-solid fa-book"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/mybooks'>
                                My Books <i className="fa-solid fa-address-book"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/ask'>
                                Ask Us <i className="fa-solid fa-circle-question"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contacts'>
                                Contact Us <i className="fa-solid fa-align-justify"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/login'>
                                Log In <i className="fa-solid fa-right-to-bracket"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                Register <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
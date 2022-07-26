import './Header.css';

function Header() {
    return (
        <header className="Header">
            <div className="header-wrapper">
                <img className="logo" src='site-logo.png' alt="site logo"/>
                <nav className="nav">
                    <ul className="nav__list">
                        <li>
                            <a href="">
                                Books <i className="fa-solid fa-book"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                My Books <i className="fa-solid fa-address-book"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Ask Us <i className="fa-solid fa-circle-question"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Contact Us <i className="fa-solid fa-align-justify"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Log In <i className="fa-solid fa-right-to-bracket"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Register <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
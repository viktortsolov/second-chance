import './Header.css';

function Header() {
    return (
        <header className="Header">
            <div className="header-wrapper">

                <nav className="header-nav">
                    <ul className="header-nav-links">
                        <li>
                            <a href="#" className="logoArt-href">
                                <img src='header-logo-pic.png' alt="Second Chance" />
                            </a>
                        </li>
                        <a href="">
                            <li>
                                Books
                            </li>
                        </a>

                        <a href="">
                            <li>
                                My Books
                            </li>
                        </a>

                        <a href="">
                            <li>
                                Ask Us
                            </li>
                        </a>

                        <a href="">
                            <li>
                                Contact us
                            </li>
                        </a>
                    </ul>
                </nav>

                <nav className="header-User-nav">
                    <ul className="header-User-nav-links">
                        <li><a href=''>Log In</a></li>
                        <li><a href=''>Register</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
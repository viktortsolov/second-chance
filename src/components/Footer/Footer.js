import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-social'>
                    <a href='https://www.instagram.com/viktor_tsolov/'><i className="fa-brands fa-instagram"></i></a>
                    <a href='https://www.facebook.com/viksun03/'><i className="fa-brands fa-facebook"></i></a>
                    <a href='https://twitter.com/viktor_tsolov'><i className="fa-brands fa-twitter"></i></a>
                    <a href='https://gmail.com/'><i className="fa-solid fa-envelope"></i></a>
                </div>
            </div>

            <ul className='footer-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/ask'>Ask us</Link>
                </li>
                <li>
                    <Link to='/contacts'>Contact us</Link>
                </li>
            </ul>

            <p className='footer-copyright'>
                &copy; 2022 Second Chance. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;
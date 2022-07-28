import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-social'>
                    <a href=''><i class="fa-brands fa-instagram"></i></a>
                    <a href=''><i class="fa-brands fa-facebook"></i></a>
                    <a href=''><i class="fa-brands fa-twitter"></i></a>
                    <a href=''><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>

            <ul className='footer-links'>
                <li>
                    <a href=''>Home</a>
                </li>
                <li>
                    <a href=''>Ask us</a>
                </li>
                <li>
                    <a href=''>Contact us</a>
                </li>
            </ul>

            <p className='footer-copyright'>
                &copy; 2022 Second Chance. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer;
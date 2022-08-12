import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    return (
        <main className='Main-LandingPage'>
            <div className='content'>
                <h1 className='content__title'>RESELL YOUR BOOKS EASILY</h1>
                <p className='content__more'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className='content__buttons'>
                    <Link to='/Catalogue'>
                        <button className='button'>MORE <i className="fa-solid fa-book-open"></i></button>
                    </Link>
                    <Link to='/Contacts'>
                        <button className='button'>LOCATION <i className="fa-solid fa-location-dot"></i></button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;
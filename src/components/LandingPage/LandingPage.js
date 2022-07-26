import './LandingPage.css';

function LandingPage() {
    return (
        <main className='Main'>
            <div className='content'>
                <h1 className='content__title'>RESELL YOUR BOOKS EASILY</h1>
                <p className='content__more'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div className='content__buttons'>
                    <button className='button'>SHOW MORE <i class="fa-solid fa-book-open"></i></button>
                    <button className='button'>OUR LOCATION <i class="fa-solid fa-location-dot"></i></button>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;
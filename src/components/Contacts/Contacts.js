import './Contacts.css';

function Contacts() {
    return (
        <main className="Main-Contacts">

            <iframe title="map" className="contacts__mapframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=22.67550%2C43.62700%2C22.68900%2C43.62247&layer=mapnik&marker=43.623760%2C22.67650"></iframe>
            <br />

            <div className="contacts">
                <div className="contacts__locationAndTime">

                    <section className="location">
                        <h2 className="location__title">
                            Location:
                        </h2>
                        <p className="location__text">
                            Belogradchik, Bulgaria
                        </p>
                    </section>

                    <section className="workingTime">
                        <h2 className="workingTime__title">Working time:</h2>

                        <article className="workingTime__weekly">
                            <h4>Monday to Friday: </h4>
                            <p>
                                09:00 to 18:00
                            </p>
                        </article>

                        <article className="workingTime__weekend">
                            <h4>Weekend: </h4>
                            <p>
                                10:00 to 17:00
                            </p>
                        </article>


                    </section>

                </div>

                <section className="contacts__info">
                    <h2 className="info__title">You can contact us here:</h2>
                    <div className="info__items">

                        <article className="item">
                            <h4>Phone number:</h4>
                            <p>+359 878 118 982</p>
                        </article>

                        <article className="item">
                            <h4>Email:</h4>
                            <p>secondchance@gmail.com</p>
                        </article>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Contacts;
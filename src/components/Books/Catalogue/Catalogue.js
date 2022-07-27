import './Catalogue.css';
import BookList from "../BookList/BookList";
import FilterMenu from '../FilterMenu/FilterMenu';

function Catalogue() {
    return (
        <main className="Main-Catalogue">
            <div className="Catalogue">
                <FilterMenu className="Catalogue-FilterMenu"/>

                <BookList className="Catalogue-BookList"/>
            </div>
        </main>
    )
}

export default Catalogue;
import './Catalogue.css';
import BookList from "../BookList/BookList";
import FilterMenu from '../FilterMenu/FilterMenu';

import { getAll } from '../../../services/Books-Service';

import { useEffect, useState } from 'react';

function Catalogue() {
    let [books, setBooks] = useState([]);

    useEffect(() => {
        getAll()
            .then(res => {
                return setBooks(res.slice(1));
            });

    }, []);

    return (
        <main className="Main-Catalogue">
            <div className="Catalogue">
                <FilterMenu className="Catalogue-FilterMenu"/>

                <BookList books={books} className="Catalogue-BookList"/>
            </div>
        </main>
    )
}

export default Catalogue;
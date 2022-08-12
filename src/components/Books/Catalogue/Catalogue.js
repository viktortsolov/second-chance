import React, { Suspense } from 'react';

import FilterMenu from '../FilterMenu/FilterMenu';

import { getFilteredBooks } from '../../../services/FilterMenu-Service'
import { useFetch } from "../../../custom/useFetch-Hook";

import api from '../../../services/api';
import './Catalogue.css';

function Catalogue() {
    const BookListLazyComponent = React.lazy(() => import('../BookList/BookList'));

    let [books, setBooks, areBooksLoading] = useFetch(api.books, []);

    function FilterSearchSubmit(e) {
        e.preventDefault();
        let titleFind = e.target.title.value;
        let authorFind = e.target.author.value;
        let genreFind = e.target.genre.value;
        let yearFind = e.target.year.value;
        let pagesFind = e.target.pages.value;
        let makeFind = e.target.make.value;
        let qualityFind = e.target.quality.value;

        getFilteredBooks(
            titleFind,
            authorFind,
            genreFind,
            yearFind,
            pagesFind,
            makeFind,
            qualityFind)
            .then(res => {
                setBooks(res);
            });
    }
    return (
        <main className="Main-Catalogue">
            <div className="Catalogue">
                <FilterMenu className="Catalogue-FilterMenu" onMenuSearchSubmit={FilterSearchSubmit} />

                <Suspense fallback={<div className="Catalogue-BookList-suspense-fallback"><h1>Loading ...</h1></div>} >
                    {areBooksLoading ?
                        <div className="Books-Loading spinner">
                            <div className="head"></div>
                        </div>
                        :
                        <BookListLazyComponent books={books} className="Catalogue-BookList" />
                    }
                </Suspense>
            </div>
        </main>
    )
}

export default Catalogue;
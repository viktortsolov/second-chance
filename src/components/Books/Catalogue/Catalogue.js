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
        let authorFind = e.target.author.value;
        let priceBellowFind = e.target.priceBellow.value;
        let priceAboveFind = e.target.priceAbove.value;
        let titleFind = e.target.title.value;
        let yearFind = e.target.year.value;
        let pagesFind = e.target.pages.value;
        let qualityFind = e.target.quality.value;

        getFilteredBooks(authorFind,
            priceBellowFind,
            priceAboveFind,
            titleFind,
            yearFind,
            pagesFind,
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
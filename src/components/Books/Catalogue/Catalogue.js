import React, { Suspense, useEffect, useState } from 'react';

import FilterMenu from '../FilterMenu/FilterMenu';

import { getAll, sortByPriceAscending, sortByPriceDescending } from '../../../services/Books-Service';
import { getFilteredBooks } from  '../../../services/FilterMenu-Service'

import './Catalogue.css';

function Catalogue() {
    const BookListLazyComponent = React.lazy(() => import('../BookList/BookList'));
    let [model, setModel] = useState("");
    let [books, setBooks] = useState([]);

    let [greenAsc, setGreenAsc] = useState(false);
    let [greenDesc, setGreenDesc] = useState(false);

    useEffect(() => {
        let mounted = true;
        getAll()
            .then(data => {
                if (mounted) {
                    setBooks((data[0] != null ? data : data.slice(1)));
                    mounted = false;
                }
            });

    }, []);


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
            model,
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

    function sortByPriceAsc(e) {
        setGreenAsc(true);
        setGreenDesc(false);

        sortByPriceAscending()
            .then(res => {
                setBooks(res);
            });

    }

    function sortByPriceDesc(e) {
        setGreenAsc(false);
        setGreenDesc(true);

        sortByPriceDescending()
            .then(res => {
                setBooks(res);
            });

    }

    return (
        <main className="Main-Catalogue">
            <div className="Catalogue">
                <FilterMenu className="Catalogue-FilterMenu" onMenuSubmit={FilterSearchSubmit} setModel={setModel} />

                <Suspense fallback={<div className="Catalogue-BookList-suspense-fallback"><h1>Loading ...</h1></div>}>
                    <BookListLazyComponent 
                    books={books}
                    setBooks={setBooks}
                    greenAsc={greenAsc}
                    greenDesc={greenDesc}
                    sortByPriceDesc={sortByPriceDesc}
                    sortByPriceAsc={sortByPriceAsc}
                    className="Catalogue-BookList" />
                </Suspense>
            </div>
        </main>
    )
}

export default Catalogue;
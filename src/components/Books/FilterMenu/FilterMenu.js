import { useEffect, useState } from 'react';
import { getAll } from '../../../services/Books-Service';
import { getAuthors, getBooks } from '../../../services/FilterMenu-Service';

import './FilterMenu.css';

function FilterMenu({onMenuSearchSubmit}) {
    useEffect(() => {
        getAll();
    });

    let [authors, setAuthors] = useState([]);
    let [books, setBooks] = useState([]);

    useEffect(() => {
        getAuthors()
            .then(authors => {
                setAuthors(authors);
            });

        let authorSelected = document.getElementById("author").value;
        getBooks(authorSelected)
            .then(books => {
                setBooks(books);
            });
    }, []);

    return (
        <aside className='FilterMenu'>
            <h2 className='FilterMenu-title'>Apply your criteria there.</h2>

            <form action='get' className='FilterMenu-form' onSubmit={onMenuSearchSubmit}>
                <label htmlFor='author'>Author</label>
                <input type='text' className='author' id='author' />

                <label htmlFor='title'>Book title</label>
                <input type='text' className='title' id='title' />

                <label htmlFor='year'>Year of printing</label>
                <input type='text' className='year' id='year' />

                <label htmlFor='pages'>Length (pages)</label>
                <input type='text' className='pages' id='pages' />

                <label htmlFor='quality'>Quality</label>
                <select name='quality' id='quality' default='QUALITY'>
                    <option value='QUALITY'>QUALITY</option>
                    <option value='QUALITY'>QUALITY</option>
                    <option value='QUALITY'>QUALITY</option>
                </select>

                <input type='submit' className='submitBtn' value='Filter' />
            </form>
        </aside>
    )
}

export default FilterMenu;
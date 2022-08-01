import { useEffect } from 'react';
import { getAll } from '../../../services/Books-Service';
import './FilterMenu.css';

function FilterMenu() {
    useEffect( () => {
        getAll();
    });

    return (
        <aside className='FilterMenu'>
            <h2 className='FilterMenu-title'>Apply your criteria there.</h2>

            <form action='get' className='FilterMenu-form'>
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

                <input type='submit' className='FilterMenu-form-submitBtn' value='Filter' />
            </form>
        </aside>
    )
}

export default FilterMenu;
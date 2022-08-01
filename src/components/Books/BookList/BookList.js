import Book from './Book/Book';
import './BookList.css';

function BookList({ books }) {
    return (
        <div className="BookList">
            <ul className='BookList-list'>
                {books.map(book => {
                    return <Book key={book.id} book={book} />
                })}
            </ul>
        </div>
    )
}

export default BookList;
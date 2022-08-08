import { Link } from "react-router-dom";
import './Book.css';

function Book({ book }) {
    return (
        <li className="Book">
             <Link to={`/book/${book.id}`}>
                <article className="Book-info">
                    <div className="info__picBox">
                        <img src={book.picture} alt="No Photo available" className="pic" />
                    </div>
                    <div className="info__content">
                        <label htmlFor="title">
                            <strong>Title: </strong>
                            <p id="title" className="content__title">{book.title}</p>
                        </label>

                        <label htmlFor="author">
                            <strong>Author: </strong>
                            <p id="author" className="content__author">{book.author}</p>
                        </label>

                        <label htmlFor="year">
                            <strong>Year: </strong>
                            <p id="year" className="content__year">{book.year}</p>
                        </label>

                        <label htmlFor="genre">
                            <strong>Genre: </strong>
                            <p id="genre" className="content__genre">{book.genre}</p>
                        </label>

                        <label htmlFor="pages">
                            <strong>Pages: </strong>
                            <p id="pages" className="content__pages">{book.pages}</p>
                        </label>

                        <label htmlFor="make">
                            <strong>Make: </strong>
                            <p id="make" className="content__make">{book.make}</p>
                        </label>

                        <label htmlFor="quality">
                            <strong>Quality: </strong>
                            <p id="quality" className="content__quality">{book.quality}</p>
                        </label>
                    </div>
                </article>
            </Link>
        </li>
    );
}

export default Book;
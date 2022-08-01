import { Link } from "react-router-dom";
import './Book.css';

function Book({ book }) {
    console.log(book.id);
    return (
        <li className="Book">
            <Link to="/">
                <article className="Book-info">
                    <div className="info__picBox">
                        <img src={book.picture} alt="No Photos available" className="pic" />
                    </div>
                    <div className="info__content">
                        <p className="content__title">{book.title}</p>
                        <p className="content__author">{book.author}</p>
                        <p className="content__year">{book.year}</p>
                        <p className="content__genre">{book.genre}</p>
                        <p className="content__pages">{book.pages}</p>
                        <p className="content__make">{book.make}</p>
                        <p className="content__quality">{book.quality}</p>
                    </div>
                </article>
            </Link>
        </li>
    );
}

export default Book;
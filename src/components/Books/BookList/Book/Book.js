import { Link } from "react-router-dom";
import './Book.css';

function Book({ book }) {
    return (
        <li className="Book">
            <div className="info__picBox">
                <img src={book.picture} alt="No Photo available" className="pic" />
            </div>
            <div className="info__content">
                <div className="info__text">
                    <p id="title" className="content__title">{book.title}</p>
                    <section id="info">
                        <p id="author" className="content__author"><strong>Author: </strong>{book.author}</p>
                        <p id="genre" className="content__genre"><strong>Genre: </strong>{book.genre}</p>
                        <p id="year" className="content__year"><strong>Year: </strong>{book.year}</p>
                        <p id="pages" className="content__pages"><strong>Pages: </strong>{book.pages}</p>
                        <p id="make" className="content__make"><strong>Make: </strong>{book.make}</p>
                        <p id="quality" className="content__quality"><strong>Quality: </strong>{book.quality} quality</p>
                        <p id="price" className="content__price"><strong>Price: </strong>{parseInt(book.price).toFixed(2)} €</p>
                        <Link className="submitBtn" to={`/BookInfo/${book.id}`}>
                            Description
                        </Link>
                    </section>
                </div>
            </div>
        </li>
    );
}

export default Book;
import { Link } from "react-router-dom";
import './Book.css';

function Book({ book }) {
    return (
        <li className="Book">
            <div className="info__picBox">
                <img src=/*{book.picture}*/"https://upload.wikimedia.org/wikipedia/en/5/57/DeadZone.jpg" alt="No Photo available" className="pic" />
            </div>
            <div className="info__content">
                <div className="info__text">
                    <p id="title" className="content__title">{book.title}</p>
                    <p id="info">
                        <p id="author" className="content__author">{book.author}</p>
                        <p id="year" className="content__year">{book.year}</p>
                        <p id="genre" className="content__genre">{book.genre}</p>
                        <p id="pages" className="content__pages">{book.pages} pages</p>
                        <p id="make" className="content__make">{book.make}</p>
                        <p id="quality" className="content__quality">{book.quality} quality</p>
                        <p id="price" className="content__price"><strong>Price: </strong>{book.price} $</p>
                        <Link className="submitBtn" to={`/book/${book.id}`}>
                            Description
                        </Link>
                    </p>
                </div>
            </div>
        </li>
    );
}

export default Book;
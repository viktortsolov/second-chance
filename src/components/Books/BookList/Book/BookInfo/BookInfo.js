import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { getOne } from '../../../../../services/Books-Service';

import { deleteBook, editBook } from "../../../../../services/Books-Service";
import { InputError, onInputBlur } from "../../../../../shared/inputError";
import { ConfirmBox, handleConfirmationBox } from "../../../../../shared/confirmBox";

import userContext from "../../../../../contexts/userContext";

import './BookInfo.css';
import { getPhones } from "../../../../../services/Phones-Service";

function BookInfo({ match }) {
    const { id } = useParams();
    let [user, setUser] = useContext(userContext);
    let [book, setBook] = useState({});
    let [phone, setPhone] = useState('');
    let [overlayDisplay, setOverlayDisplay] = useState('none');
    let [bookInfo, setBookInfo] = useState('Main-BookInfo');

    const [editTask, setEditTask] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false);

    let [errorMessage, setErrorMessage] = useState({
        Author: '',
        Title: '',
        Genre: '',
        Make: '',
        Pages: '',
        Price: '',
        Quality: '',
        Year: '',
        Description: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        getOne(id)
            .then(data => {
                setBook(data);
                getPhones()
                    .then(x => {
                        let entries = Object.entries(x);
                        entries.forEach(entry => {
                            entry.forEach(number => {
                                if (number.uid === book.ownerId) { 
                                    setPhone(number.phone)
                                }
                            })
                        })
                    })
            });
    }, [book.id]);


    const handleEditTask = (e) => {
        e.preventDefault();
        const { author, title, genre, make, pages, price, quality, year, description } = e.target.parentNode.parentNode.parentNode.parentNode;

        if (author.value == '' ||
            title.value == '' ||
            genre.value == '' ||
            make.value == '' ||
            pages.value == '' ||
            year.value == '' ||
            price.value == '' ||
            quality.value == '') {
            alert(`Please fill all the inputs!`)
            return;
        }

        let updatedBook = {
            author: author.value,
            title: title.value,
            genre: genre.value,
            make: make.value,
            pages: pages.value,
            year: year.value,
            price: price.value,
            quality: quality.value,
            description: description.value
        };

        editBook(book.id, book, updatedBook)
            .then(res => {
                navigate(`/MyBooks`);
                alert(`The book was successfully edited!`)
            })

    };

    const handleDeleteTask = (e) => {
        e.preventDefault();

        deleteBook(book.id)
            .then(res => {
                navigate('/MyBooks');
                alert(`The book was successfully deleted!`)
            });

    };


    const onContactOwnerClick = () => {
        setOverlayDisplay(oldState => oldState = oldState === 'none' ? 'block' : 'none');
        setBookInfo(oldState => oldState === 'Main-BookInfo blur' ? 'Main-BookInfo' : 'Main-BookInfo blur');
    }

    const onMainBookInfoClick = (e) => {
        if (e.target.className !== 'contactOwner') {
            setOverlayDisplay('none');
            setBookInfo('Main-BookInfo');
        }
    }

    return (
        <>
            {user.uid !== 101 ?
                <>
                    <h3 className='numberClick' style={{ display: `${overlayDisplay}` }}>{phone}</h3>
                    <main className={bookInfo} onClick={onMainBookInfoClick}>
                        <div className="BookInfo-wrapper">
                            <div className="BookInfo">
                                <form className="BookInfo-details-content">
                                    <section className="BookInfo-details">
                                        <article className="BookInfo-details-imageWrapper">
                                            <img src={book.picture} alt="No Photo!" />
                                        </article>

                                        <article className="BookInfo-details-content-wrapper">

                                            <label htmlFor="title" className="BookInfo-details-content-label">
                                                Title:
                                                <input
                                                    id="title"
                                                    className="BookInfo-details-content-text"
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Title')}
                                                    defaultValue={book.title}
                                                />

                                                <InputError>{errorMessage.Title}</InputError>
                                            </label>
                                            <label htmlFor="author" className="BookInfo-details-content-label">
                                                Author:
                                                <input
                                                    id="author"
                                                    className="BookInfo-details-content-text"
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Author')}
                                                    defaultValue={book.author}
                                                />
                                                <InputError>{errorMessage.Author}</InputError>
                                            </label>
                                            <label htmlFor="genre" className="BookInfo-details-content-label">
                                                Genre:
                                                <input
                                                    id="genre"
                                                    className="BookInfo-details-content-text"
                                                    defaultValue={book.genre}
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Genre')}
                                                />
                                                <InputError>{errorMessage.Genre}</InputError>
                                            </label>
                                            <label htmlFor="year" className="BookInfo-details-content-label">
                                                Year:
                                                <input
                                                    id="year"
                                                    className="BookInfo-details-content-text"
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Year')}
                                                    defaultValue={book.year}
                                                />
                                                <InputError>{errorMessage.Year}</InputError>
                                            </label>
                                            <label htmlFor="pages" className="BookInfo-details-content-label">
                                                Pages:
                                                <input
                                                    id="pages"
                                                    className="BookInfo-details-content-text pagesInput"
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Pages')}
                                                    defaultValue={book.pages}
                                                />
                                                <InputError>{errorMessage.Pages}</InputError>
                                            </label>
                                            <label htmlFor="make" className="BookInfo-details-content-label">
                                                Make:
                                                <input
                                                    id="make"
                                                    className="BookInfo-details-content-text"
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Make')}
                                                    defaultValue={book.make}
                                                />
                                                <InputError>{errorMessage.Make}</InputError>
                                            </label>
                                            <label htmlFor="quality" className="BookInfo-details-content-label">
                                                Quality:
                                                <input
                                                    id="quality"
                                                    className="BookInfo-details-content-text"
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Quality')}
                                                    defaultValue={book.quality}
                                                />
                                                <InputError>{errorMessage.Quality}</InputError>
                                            </label>
                                            <label htmlFor="description" className="BookInfo-details-content-label">
                                                Description:
                                                <textarea id="description" className="BookInfo-details-content-text BookInfo-textArea" defaultValue={book.description}></textarea>
                                            </label>
                                            <label htmlFor="price" className="BookInfo-details-content-label">
                                                Price:
                                                <input
                                                    id="price"
                                                    className="BookInfo-details-content-text priceInput"
                                                    onBlur={(e) => onInputBlur(e, setErrorMessage, 'Price')}
                                                    defaultValue={book.price}
                                                />
                                                <InputError>{errorMessage.Price}</InputError>
                                            </label>
                                        </article>
                                    </section>

                                    {book.ownerId === user.uid ?

                                        <section className="BookInfo-modify remodal-bg">
                                            <input type="submit"
                                                onClick={(e) => handleConfirmationBox(e, editTask, setEditTask)}
                                                className="editBtn"
                                                value="Edit"
                                            />
                                            {editTask === true ?
                                                <ConfirmBox taskName="Edit" handleTask={handleEditTask} task={editTask} setTask={setEditTask} />
                                                :
                                                <></>
                                            }
                                            <input type="submit"
                                                onClick={(e) => handleConfirmationBox(e, deleteTask, setDeleteTask)}
                                                className="deleteBtn"
                                                value="Delete" />
                                            {deleteTask === true ?
                                                <ConfirmBox taskName="Delete" handleTask={handleDeleteTask} task={deleteTask} setTask={setDeleteTask} />
                                                :
                                                <></>
                                            }
                                        </section>

                                        :

                                        <div className="contactOwner" onClick={onContactOwnerClick}>

                                            <h3 className="contactOwner-title">Phone</h3>
                                            <p className="contactOwner-text">{phone}</p>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                    </main>
                </>
                :
                <div className="logInFirst">
                    <h1 className="logInFirst-title">Please <Link to="/Login" className="logInFirst-title-logIn">log in</Link> first <span>or</span> <Link to="/Register" className="logInFirst-title-register">create</Link> your account</h1>
                </div>
            }
        </>
    );
}

export default BookInfo;

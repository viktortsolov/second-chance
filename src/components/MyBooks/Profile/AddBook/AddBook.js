import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../../../../utils/firebase";

import { getStorage, ref, uploadBytes } from "firebase/storage";

import { createNewBook } from "../../../../services/Books-Service";
import { useInput } from "../../../../custom/useInput-Hook";
import userContext from "../../../../contexts/userContext";

import "./AddBook.css";

function AddBook() {
    let navigate = useNavigate();

    let [user, setUser] = useContext(userContext);

    let [image, setImage] = useState(null);
    let [progress, setProgress] = useState(0);

    let [titleError, setTitleError] = useState(false);
    let [authorError, setAuthorError] = useState(false);
    let [yearError, setYearError] = useState(false);
    let [genreError, setGenreError] = useState(false);
    let [pagesError, setPagesError] = useState(false);
    let [makeError, setMakeError] = useState(false);
    let [priceError, setPriceError] = useState(false);
    let [qualityError, setQualityError] = useState(false);

    let [url, setUrl] = useState("");

    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
    const { value: author, bind: bindAuthor, reset: resetAuthor } = useInput('');
    const { value: year, bind: BindYear, reset: resetYear } = useInput('');
    const { value: genre, bind: bindGenre, reset: resetGenre } = useInput('');
    const { value: pages, bind: bindPages, reset: resetPages } = useInput('');
    const { value: make, bind: bindMake, reset: resetMake } = useInput('');
    const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');
    const { value: price, bind: BindPrice, reset: reserPrice } = useInput('');
    const { value: quality, bind: BindQuality, reset: reserQuality } = useInput('');

    useEffect(() => {

    }, []);

    const handleChangePhotoUpload = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const uploadImage = async () => {
        const filename = performance.now().toString(36) + Math.random().toString(36).replace(/\./g, "") + Date.now();
        const uri = image;
        const storage = getStorage();

        const filesImagesRef = ref(storage, `images/${filename}.jpg`);
        await uploadBytes(filesImagesRef, uri).then((snapshot) => {
            const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/second-chance-viktortsolov.appspot.com/o/images%2F${filename}.jpg?alt=media`;
            setUrl(downloadUrl);
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title == "" || author == "" || year == "" || genre == "" || pages == "" || make == "" || quality == "", url == "") {
            if (price == "") {
                triggerValidationDiv(title, setTitleError)
                triggerValidationDiv(author, setAuthorError)
                triggerValidationDiv(year, setYearError);
                triggerValidationDiv(price, setPriceError);
                triggerValidationDiv(genre, setGenreError);
                triggerValidationDiv(pages, setPagesError);
                triggerValidationDiv(make, setMakeError);
                triggerValidationDiv(quality, setQualityError);

                alert("Please fill in all the fields!")
                return;
            }
            if (price < 0 || price > 1000000) {

                if (make === "") {
                    setMakeError(true);
                } else {
                    setMakeError(false);
                }

                triggerValidationDiv(title, setTitleError)
                triggerValidationDiv(author, setAuthorError)
                triggerValidationDiv(year, setYearError);
                triggerValidationDiv(price, setPriceError);
                triggerValidationDiv(genre, setGenreError);
                triggerValidationDiv(pages, setPagesError);
                triggerValidationDiv(make, setMakeError);
                triggerValidationDiv(quality, setQualityError);

                alert("Please fill in all the fields!")
                return;
            }
        }

        let newBook = {
            picture: url || "no photo",
            title: title,
            author: author,
            year: year,
            price: price,
            genre: genre,
            pages: pages,
            make: make,
            quality: quality,
            id: url,
            description: description
        };

        let res = await createNewBook(newBook, user.uid);
        alert("Your book has been added! :)")

        navigate("/MyBooks")
        return res;
    }

    function triggerValidationDiv(input, nameInputSet) {

        if (input === "") {
            nameInputSet(true);

        } else {
            nameInputSet(false);
        }

    }
    return (
        <>
            {user.uid !== 101 ?
                <main className="AddBook-wrapper">
                    <div className="AddBook">
                        <section className="AddBook-uploadImg-img-wrapper">
                            <h1 className="AddBook-uploadImg-title">ADD NEW BOOK</h1>

                            <img src={url || "https://icon-library.com/images/upload-image-icon-png/upload-image-icon-png-3.jpg"} alt="Please provide photo
                    !" className="AddBook-uploadImg-img" />

                            <article className="AddBook-uploadImg">

                                <progress value={progress} max="100" className="AddBook-uploadImg-progress" />

                                <div className="AddBook-uploadImg-input-wrapper">

                                    <input id="photoUrl" className="AddBook-uploadImg-input" type="file" onChange={handleChangePhotoUpload} />
                                    <button onClick={uploadImage} className="submitBtn">Upload!</button>
                                </div>

                            </article>
                        </section>

                        <form className="AddBook-content" onSubmit={handleSubmit}>

                            <h2 className="AddBook-content-title">
                                FILL ALL THE FIELDS
                            </h2>

                            <article className="AddBook-text">

                                <label htmlFor="make" className="AddBook-text-make">
                                    <strong className="AddBook-text-Name">Make:</strong>
                                    <input
                                        id="make"
                                        {...bindMake}
                                        className="AddBook-text-input"
                                        type="text"
                                        placeholder="Egmont..." />

                                    <div className={`input-validation ${makeError && 'show'}`}>
                                        Please provide a make!
                                    </div>
                                </label>

                                <label htmlFor="author" className="AddBook-text-author">
                                    <strong className="AddBook-text-Name">Author:</strong>
                                    <input id="author" {...bindAuthor} className="AddBook-text-input" type="text" placeholder="Stephen King..." />

                                    <div className={`input-validation ${authorError && 'show'}`}>
                                        Enter book author!
                                    </div>
                                </label>

                                <label htmlFor="title" className="AddBook-text-title">
                                    <strong className="AddBook-text-Name">Title:</strong>
                                    <input id="title" {...bindTitle} className="AddBook-text-input" type="text" placeholder="The Dead Zone..." />

                                    <div className={`input-validation ${titleError && 'show'}`}>
                                        Enter book title!
                                    </div>
                                </label>

                                <label htmlFor="year" className="AddBook-text-year">
                                    <strong className="AddBook-text-Name">Year:</strong>
                                    <input id="year" {...BindYear} className="AddBook-text-input" type="text" placeholder="1979..." />

                                    <div className={`input-validation ${yearError && 'show'}`}>
                                        Enter book year!
                                    </div>
                                </label>

                                <label htmlFor="genre" className="AddBook-text-genre">
                                    <strong className="AddBook-text-Name">Genre:</strong>
                                    <input id="genre" {...bindGenre} className="AddBook-text-input" type="text" placeholder="Horror..." />

                                    <div className={`input-validation ${genreError && 'show'}`}>
                                        Enter genre of the book!
                                    </div>
                                </label>

                                <label htmlFor="pages" className="AddBook-text-pages">
                                    <strong className="AddBook-text-Name">Pages:</strong>
                                    <input id="Pages" {...bindPages} className="AddBook-text-input" type="number" placeholder="500..." />

                                    <div className={`input-validation ${pagesError && 'show'}`}>
                                        Enter book pages!
                                    </div>
                                </label>

                                <label htmlFor="quality" {...BindQuality} className="AddBook-text-quality">
                                    <strong className="AddBook-text-Name">Quality:</strong>
                                    <input id="quality" className="AddBook-text-input" type="text" placeholder="Bad..." />

                                    <div className={`input-validation ${qualityError && 'show'}`}>
                                        Enter book quality!
                                    </div>
                                </label>

                                <label htmlFor="description" className="AddBook-text-description">
                                    <strong className="AddBook-text-Name descriptionTitle">Description:</strong>
                                    <textarea id="description" {...bindDescription} className="AddBook-text-input" cols="20" rows="5" placeholder="Info..." />
                                </label>

                                <label htmlFor="price" className="AddBook-text-price">
                                    <strong className="AddBook-text-Name">Price:</strong>
                                    <input id="price" {...BindPrice} className="AddBook-text-input" type="number" placeholder="20..." />

                                    <div className={`input-validation ${priceError && 'show'}`}>
                                        Price must be between 0 and 10 000 000!
                                    </div>
                                </label>

                            </article>

                            <div className="AddBook-button-wrapper">
                                <Link to="/MyBooks" className="submitBtn">Cancel</Link>
                                <input type="submit" className="submitBtn" value="Create" />
                            </div>
                        </form>
                    </div>
                </main>
                :
                <div className="logInFirst">
                    <h1 className="logInFirst-title">Please <Link to="/Login" className="logInFirst-title-logIn">log in</Link> first <span>or</span> <Link to="/Register" className="logInFirst-title-register">create</Link> your account</h1>
                </div>
            }
        </>

    );
}

export default AddBook;
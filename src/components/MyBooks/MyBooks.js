import React, { useEffect, useState, useContext } from "react";
import { getMine } from "../../services/Books-Service";

import BookList from "../Books/BookList/BookList";
import Profile from "./Profile/Profile";
import userContext from "../../contexts/userContext";

import './MyBooks.css';
import { Link } from "react-router-dom";

function MyBooks() {

    let [user, setUser] = useContext(userContext);
    let [books, setBooks] = useState([]);

    useEffect(() => {
        getMine(user?.uid)
            .then(data => {
                return setBooks(data);
            });
    }, [user.uid]);


    return (
        <>
            {user.uid !== 101 ?
                <main className="Main-MyBooks">
                    <div className="MyBooks">
                        <Profile profile={user} />
                        <BookList books={books} className="Books-BookList" />
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

export default MyBooks;



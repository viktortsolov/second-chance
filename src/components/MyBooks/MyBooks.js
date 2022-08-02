import { useEffect, useState } from "react";
import { getMine } from "../../services/Books-Service";
import { getUser } from "../../services/User-Service";

import Profile from "./Profile/Profile";
import BookList from "../Books/BookList/BookList";

import './MyBooks.css';

function MyBooks() {
    let [user, setUser] = useState({});
    let [books, setBooks] = useState([]);

    useEffect(() => {
        getUser()
            .then(data => console.log(data));

        getMine(96)
            .then(data => {
                console.log(data);
                return setBooks(data);
            });
    }, []);

    return (
        <main className="Main-MyBooks">
            <div className="MyBooks">
                <Profile />
                <BookList books={books} className="Book-BookList" />
            </div>
        </main>
    );
}

export default MyBooks;
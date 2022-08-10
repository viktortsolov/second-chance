import { useEffect, useState } from "react";

import { getMine, sortByPriceDescendingForMyProfile, sortByPriceAscendingForMyProfile } from "../../services/Books-Service";
import { getUser } from "../../services/User-Service";

import Profile from "./Profile/Profile";
import BookList from "../Books/BookList/BookList";

import './MyBooks.css';

function MyBooks() {
    let [user, setUser] = useState({});
    let [books, setBooks] = useState([]);

    let [greenAsc, setGreenAsc] = useState(true);
    let [greenDesc, setGreenDesc] = useState(true);


    useEffect(() => {
        getMine(96)
            .then(data => {
                console.log(data);
                return setBooks(data);
            });
    }, []);

    function sortByPriceAsc() {
        setGreenAsc(!greenAsc);

        sortByPriceAscendingForMyProfile(96)
            .then(res => {
                setBooks(res);
            });
    }

    function sortByPriceDesc() {
        setGreenDesc(!greenDesc);

        sortByPriceDescendingForMyProfile(96)
            .then(res => {
                setBooks(res);
            });
    }


    return (
        <main className="Main-MyBooks">
            <div className="MyBooks">
                <Profile />

                <BookList books={books}
                    greenAsc={greenAsc}
                    greenDesc={greenDesc}
                    sortByPriceDesc={sortByPriceDesc}
                    sortByPriceAsc={sortByPriceAsc}
                    className="Book-BookList" />
            </div>
        </main>
    );
}

export default MyBooks;
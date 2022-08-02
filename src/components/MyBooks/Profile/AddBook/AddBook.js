import { useEffect, useState } from "react";
import { getMine } from "../../../services/Books-Services";
import { getUser } from "../../../services/User-Services";


import './AddBook.css';

function AddBook() {
    let [user, setUser] = useState({});
    let [books, setBooks] = useState([]);

    useEffect(() => {
        getUser()
            .then(data=> console.log(data));

        getMine(96)
            .then(data => {
                console.log(data);
                return setBooks(data);
            });
    }, []);

    return (
        <main className="Main-AddBook">
            <div className="AddBook">

            </div>
        </main>
    );
}

export default AddBook;
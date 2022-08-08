import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../../../utils/firebase";

import { createNewBook } from "../../../../services/Books-Service";
import { useInput } from "../../../../custom/useInput-Hook";

import "./AddBook.css";

function AddBook() {
    let [user, setUser] = useState({});
    let [image, setImage] = useState(null);
    let [progress, setProgress] = useState(0);
    let [url, setUrl] = useState("");

    const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
}

export default AddBook;
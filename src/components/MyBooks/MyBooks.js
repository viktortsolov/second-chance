import React, { useEffect, useState , useContext } from "react";
import { getMine, sortByPriceDescendingForMyProfile, sortByPriceAscendingForMyProfile } from "../../services/Books-Service";


import BookList from "../Books/BookList/BookList";
import ProfileInfo from "./Profile/Profile";
// import Notification  from "../Notifications/Notification";
import userContext from "../../contexts/userContext";

import './MyBooks.css';
import { Link } from "react-router-dom";

function MyProfile() {

    let [user, setUser] = useContext(userContext);
    let [books, setBooks] = useState([]);

    let [stateNotification, setStateNotification] = useState('closed');
    let [messageNotification, setMessageNotification] = useState('');
    let [typeNotification, setTypeNotification] = useState('danger');


    let [greenAsc, setGreenAsc] = useState(true);
    let [greenDesc, setGreenDesc] = useState(true);

    useEffect(() => {
        getMine(user.uid)
            .then(data => {
                console.log(data);
                return setBooks(data);
            });
    }, [user.uid]);

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

    const showSuccesNotification = () =>{
        setStateNotification('opened');
        setMessageNotification('Success! You added new book.');
        setTypeNotification('success');
    }


    return (
        <>
            {user.uid!==101?
            // <Notification type={typeNotification} state={stateNotification} message={messageNotification} />*/}
            <main className="Main-MyProfile">
                <div className="MyProfile">
                    <ProfileInfo profilData={user} />
                    <BookList books={books}
                        greenAsc={greenAsc}
                        greenDesc={greenDesc}
                        showSort={false}
                        sortByPriceDesc={sortByPriceDesc}
                        sortByPriceAsc={sortByPriceAsc}
                        className="Books-BookList" />
                </div>
            </main>
            :
            <div className="logInFirst">
                    <h1 className="logInFirst-title">Please <Link to="./Login" className="logInFirst-title-logIn">log in</Link> first <span>or</span> <Link to="./Register" className="logInFirst-title-register">create</Link> your account</h1>
            </div>
        }
        </>
    );
}


export default MyProfile;



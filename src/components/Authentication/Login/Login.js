import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from "../../../utils/firebase";

import userContext from "../../../contexts/userContext";

import { getPhones } from "../../../services/Phones-Service";
import { getUrl } from "../../../services/User-Service";

import { useNavigate } from "react-router-dom";

import './Login.css';

function Login() {
    var navigate = useNavigate();
    let [user, setUser] = useContext(userContext);

    const signInFormHandler = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        if (email.length < 5) {
            alert("Please, fill up your email...")
            return;
        }

        if (!validatePassword(password)) {
            return;
        }


        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var userCurrent = userCredential.user;

                getPhones(userCurrent.uid)
                    .then(resUser => {
                        getUrl(userCurrent.uid)
                            .then(url => {
                                setUser({
                                    email: userCurrent.email,
                                    uid: userCurrent.uid,
                                    url: url
                                });
                            });
                    });

                navigate("/Catalogue")
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }

    function validatePassword(p) {
        if (p.length < 6) {
            alert("Your password must be at least 6 characters")
            return false;
        }
        if (p.search(/[a-z]/i) < 0) {
            alert("Your password must contain at least one letter.")
            return false;
        }
        return true;
    }

    return (
        <div className="auth-wrapper">
            <div className="registerSuggest">
                <p>New here?<Link to="/Register"> Try REGISTER!</Link> It is free!</p>
            </div>
            <div className="auth container">
                <div className="auth-container">
                    <div className="auth-container-content">
                        <form className="auth-form" onSubmit={signInFormHandler}>
                            <h1>Login</h1>
                            <section className="field">
                                <label className="field-text">Email</label>
                                <input type="email" name="email" placeholder="Your email..." />
                            </section>
                            <section className="field">
                                <label className="field-text">Password</label>
                                <input type="password" name="password" placeholder="Your password..." />
                                <a href="">Forget password?</a>
                            </section>
                            <button type="submit" className="submitBtn">SIGN IN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login; 
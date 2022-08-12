import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { storage, firebase } from "../../../utils/firebase";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import './Register.css';

import { createNewPhone } from "../../../services/Phones-Service"

function Register() {
    let navigate = useNavigate();
    let [image, setImage] = useState(null);
    let [progress, setProgress] = useState(0);
    let [url, setUrl] = useState("");
    const [errorsList, setErrorsList] = useState([]);

    const handleUpload = async (uid) => {
        const uri = image;
        const storage = getStorage();

        const filesImagesRef = ref(storage, `users/${uid}/profilePic.jpg`);
        await uploadBytes(filesImagesRef, uri).then((snapshot) => {
            const downloadUrl = `firebasestorage.googleapis.com/v0/b/second-chance-viktortsolov.appspot.com/o/users%2F${uid}%2FprofilePic.jpg?alt=media`;
            setUrl(downloadUrl);
        });
    };

    const handleChangePhotoUpload = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);

            const uploadTask = storage.ref(`temp/${e.target.files[0].name}`).put(e.target.files[0]);

            uploadTask.on(
                "state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },
                () => {
                    storage
                        .ref("temp")
                        .child(e.target.files[0].name)
                        .getDownloadURL()
                        .then(url => {
                            setUrl(url);
                        });
                }
            );
        }
    };

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        if (url !== '') {
            const photoRef = storage.refFromURL(url);
            photoRef.delete();
        } else {
            alert("Upload your photo!")
            return;
        }

        let email = e.target.email.value;
        let name = e.target.name.value;
        let password = e.target.password.value;
        let rePassword = e.target.repeatPassword.value;
        let phone = e.target.phone.value;

        if (password !== rePassword) {
            alert('Pass do not match!');
            return;
        }

        if (email == '') {
            alert("Please provide email!")
            return;
        }

        if (name == '') {
            alert("Please provide name!")
            return;
        }

        if (phone == '') {
            alert("Please provide phone!")
            return;
        }

        if (!validatePassword(password)) {
            return;
        }

        if (password !== rePassword) {
            alert(`Passwords do not match!`)
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                handleUpload(user.uid);

                createNewPhone(user.uid, phone, name)

                navigate("/Login")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }

    function validatePassword(p) {
        var errors = [];
        if (p.length < 6) {
            alert("Your password must be at least 6 characters!");
            return false;
        }
        if (p.search(/[a-z]/i) < 0) {
            alert("Your password must contain at least one letter.");
            return false;
        }
        return true;
    }


    return (
        <>
            <div className="auth-wrapper">
                <div className="loginSuggest">
                    <p>Already signed up? Then <Link to="/Login">LOG IN</Link> and get full access to our services!</p>
                </div>
                <div className="auth container">
                    <div className="auth-container register">
                        <div className="auth-container-img registerImg">

                            <h1 className="auth-container-img-imageUpload-title">Upload your photo here.</h1>

                            <img src={url || "https://icon-library.com/images/upload-image-icon-png/upload-image-icon-png-3.jpg"} alt="Please provide photo!" className="auth-container-img-imageUpload-Image" />

                            <article className="auth-container-img-imageUpload">

                                <progress value={progress} max="100" className="auth-container-img-imageUpload-progress" />

                                <div className="auth-container-img-imageUpload-input-wrapper">
                                    <input id="photoUrl" className="auth-container-img-imageUpload-input" type="file" onChange={handleChangePhotoUpload} />
                                </div>

                            </article>

                        </div>
                        <div className="auth-container-content">
                            <form className="auth-form" onSubmit={onRegisterSubmitHandler}>
                                <h1>Register</h1>
                                <section className="field">
                                    <label>Email</label>
                                    <input type="text" name="email" placeholder="Enter email address..." />
                                </section>
                                <section className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" placeholder="name" />
                                </section>
                                <section className="field">
                                    <label>Phone</label>
                                    <input type="text" name="phone" placeholder="Enter phone number..." />
                                </section>
                                <section className="field">
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Enter password..." />
                                </section>
                                <section className="field">
                                    <label>Repeat Password</label>
                                    <input type="password" name="repeatPassword" placeholder="Repeat the password..." />
                                </section>
                                <button type="submit" className="submitBtn">SIGN UP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register; 
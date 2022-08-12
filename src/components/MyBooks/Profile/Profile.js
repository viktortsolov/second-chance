import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPhones } from '../../../services/Phones-Service';
import './Profile.css';

function Profile({ profile }) {
    let [phone, setPhone] = useState("");
    let [name, setName] = useState("");

    useEffect(() => {
        getPhones(profile.uid)
            .then(x => {
                let entries = Object.entries(x);
                entries.forEach(entry => {
                    entry.forEach(number => {
                        if (number.uid === profile.uid) {
                            setPhone(number.phone)
                            setName(number.name)
                        }
                    })
                })
            })
    }, [profile.uid]);

    return (
        <aside className="Profile-wrapper">
            <div className="Profile">
                <img className="Profile-photo" src={profile.url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="User photo"></img>
                <h1>{name}</h1>
                <p className="Profile-email">{profile.email}</p>
                <p><strong>Phone Number: </strong>{phone}</p>
            </div>

            <Link to="/AddBook" className='submitBtn'>
                Add a book
            </Link>
        </aside>
    );
}

export default Profile;
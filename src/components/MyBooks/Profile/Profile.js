import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(profile) {
    return (
        <aside className="Profile-wrapper">
            <div className="Profile">
                <label htmlFor="photo">
                    Photo:
                    <p>{profile.photo}</p>
                </label>
                <label htmlFor="name">
                    Name:
                    <p>{profile.name}</p>
                </label>
                <label htmlFor="email">
                    Email:
                    <p>{profile.email}</p>
                </label>
            </div>

            <Link to="./addbook">
                <button>Add a book</button>
            </Link>
        </aside>
    );
}

export default Profile;
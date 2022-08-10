import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(profile) {
    return (
        <aside className="Profile-wrapper">
            <div className="Profile">
                <img className="Profile-photo" src={profile.url} alt="User photo"></img>
                <label htmlFor="name">
                    Name:
                    <p>{profile.name}</p>
                </label>
                <label htmlFor="email">
                    Email:
                    <p>{profile.email}</p>
                </label>
            </div>

            <Link to="/addbook" className='submitBtn'>
                Add a book
            </Link>
        </aside>
    );
}

export default Profile;
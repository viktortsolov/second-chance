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


        </aside>
    );
}

export default Profile;
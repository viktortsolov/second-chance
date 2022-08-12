import { firebase } from "../../../utils/firebase";
import { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import userContext from "../../../contexts/userContext";

function Logout() {
    let navigate = useNavigate();
    let [user, setUser] = useContext(userContext);

    useEffect(() => {
        firebase.auth().signOut().then(() => {
            setUser({ uid: 101, name: 'Guest', url: '', phone: '' });
            navigate("/Login")
        }).catch((error) => {
            let err = error;
        });
    }, [])
}

export default Logout; 
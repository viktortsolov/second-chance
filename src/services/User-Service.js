import api from './api';

export function getUser() {
    return fetch(api.books)
        .then(res => res.json())
        .catch(err => console.log(err));
} 
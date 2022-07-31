import api from './api';

export const getAll = () => {
    return fetch(api.books)
        .then(res => res.json())
        .catch(err => console.log(err));
} 
import api from "./api";
import { request } from "./requestService";

export const getAuthors = () => {
    return fetch(api.books)
        .then(res => res.json())
        .then(data => {
            let res = Object.values(data)
                .map(d => d.author);

            return [... new Set(res)];
        })
        .catch(err => console.log(err));
}

export const getBooks = (make) => {
    return fetch(api.books)
        .then(res => res.json())
        .then(data => {
            return Object.values(data)
                .filter(d => d.make === make)
                .map(d => d.title);
        })
        .catch(err => console.log(err));
} 
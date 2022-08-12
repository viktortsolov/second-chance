import api from "./api";
import { request } from "./requestService";

export const getAuthors = () => {
    return request(api.books)
        .then(data => {
            let res = Object.values(data)
                .map(d => d.author);
        })
}

export const getBooks = (author) => {
    return fetch(api.books)
        .then(res => res.json())
        .then(data => {
            return Object.values(data)
                .filter(d => d.author === author)
                .map(d => d.title);
        })
        .catch(err => { let error = err });
}

export const getFilteredBooks = async (
    titleFind,
    authorFind,
    genreFind,
    yearFind,
    pagesFind,
    makeFind,
    qualityFind
) => {
    let res = await request(api.books, 'GET');

    if (
        titleFind == "" &&
        authorFind == "" &&
        genreFind == "" &&
        yearFind == "" &&
        pagesFind == "" &&
        makeFind == "" &&
        qualityFind == "") {
        return Object.keys(res)
        .map(key => ({ key, ...res[key] }));
    }

    return Object.keys(res)
        .map(key => ({ key, ...res[key] }))
        .filter(x =>
            x.title == titleFind ||
            x.author == authorFind ||
            x.genre == genreFind ||
            x.year == yearFind ||
            x.pages == pagesFind ||
            x.make == makeFind ||
            x.quality == qualityFind)
}
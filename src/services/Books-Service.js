import api from './api';
import { request } from "./requestService";

export const getAll = () => {
    return fetch(api.books)
        .then(res => res.json())
        .then(data => Object.values(data))
        .catch(err => console.log(err));
}

export const getMine = (userId) => {
    return fetch(api.books)
        .then(res => res.json())
        .then(data => {
            data = Object.values(data);
            return (data[0] != null ? data : data
                .slice(1))
                .filter(book => book.ownerId === userId)
        })
        .catch(err => console.log(err));
}

export const createNewBook = async (
    {
        picture,
        title,
        author,
        year,
        genre,
        pages,
        id,
        make,
        quality,
        price
    },
    ownerId) => {

    let res = await request(`${api.books}`, 'POST', { picture, title, author, year, genre, pages, make, quality, price, ownerId, id });

    let name = res.name;

    res = await setNewBookId(name);
    return res;
}

async function setNewBookId(name) {
    let res = await request(`${api.book + name + '.json'}`, 'PATCH', { id: name, returnSecureToken: true });

    return res;
}


export const getOne = (id) => {
    return fetch(api.books + id + '.json')
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log(err));
}

export const sortByPriceAscending = () => {
    return fetch(api.books)
       .then(res => res.json())
       .then(data => Object.values(data))
       .then(res => res.sort(function (a, b) {
          return a.price - b.price;
       }))
       .catch(err => console.log(err));
 }
 
 export const sortByPriceDescending = () => {
    return fetch(api.books)
       .then(res => res.json())
       .then(data => Object.values(data))
       .then(res => res.sort(function (a, b) {
          return b.price - a.price;
       }))
       .catch(err => console.log(err));
 }
 
 export const sortByPriceAscendingForMyProfile = (userId) => {
    return fetch(api.books)
       .then(res => res.json())
       .then(data => Object
          .values(data))
       .then(res => {
          return res.filter(book => book.ownerId === userId);
       })
       .then(res => res.sort(function (a, b) {
          return a.price - b.price;
       }))
 
       .catch(err => console.log(err));
 }
 
 export const sortByPriceDescendingForMyProfile = (userId) => {
    return fetch(api.books)
       .then(res => res.json())
       .then(data => Object
          .values(data))
       .then(res => res.filter(book => book.ownerId === userId).sort(function (a, b) {
          return b.price - a.price;
       })
 
       )
       .catch(err => console.log(err));
 }
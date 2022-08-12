import api from './api';
import { request } from "./requestService";

export const getAll = () => {
   return fetch(api.books)
      .then(res => res.json())
      .then(data => Object.values(data));
}

export const getMine = (userId) => {
   return fetch(api.books)
      .then(res => res.json())
      .then(data => {
         data = Object.values(data);
         return (data[0] != null ? data : data
            .slice(1))
            .filter(book => book.ownerId === userId)
      });
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
      price,
      description
   },
   ownerId) => {

   let res = await request(`${api.books}`, 'POST', { picture, title, author, year, genre, pages, make, quality, price, ownerId, id, description });

   let name = res.name;

   res = await setNewBookId(name);
   return res;
}

async function setNewBookId(name) {
   let res = await request(`${api.book + name + '.json'}`, 'PATCH', { id: name });

   return res;
}

export const getOne = (id) => {
   return fetch(api.book + id + '.json')
      .then(res => res.json())
      .then(data => {
         return data;
      })
      .catch(err => {let error = err;});
}

export const deleteBook = async (id) => {

   let res = await request(`${api.book + `${id}.json`}`, 'DELETE', {})
      .catch(err => {let error = err});

   return res;
}

export const editBook = async (id, book, bookUpdated) => {
   let res = await request(`${api.book + `${id}.json`}`, 'PATCH', { ...book, ...bookUpdated })
      .catch(err => {let error = err;});

   return res;
}
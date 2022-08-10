import api from "./api";
import { request } from "./requestService";

export const getAuthors = () => {
    return request(api.books)
        .then(data => {
            let res = Object.values(data)
                .map(d => d.author);
        })
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

export const getFilteredBooks = async (
    makeFind,
    modelFind,
    priceBellow = 100000000,
    priceAbove = 0,
    firstRegistration = 1900,
    transmission = "automatic",
    fuel,
    color = "black"
) => {
    let res = await request(api.books, 'GET');

    firstRegistration = firstRegistration === "" ? 1000 : firstRegistration;

    if (modelFind == "") {
        modelFind = "All";
    }
    return Object.keys(res)
        .map(key => ({ key, ...res[key] }))
        .filter(x => makeFind !== "All" ? x.make === makeFind : x)
        .filter(x => modelFind !== "All" ? x.model === modelFind : x)
        .filter(x => priceAbove !== "" ? x.price >= priceAbove : x)
        .filter(x => priceBellow !== "" ? x.price <= priceBellow : x)
        .filter(x => firstRegistration !== "" ? x.year >= firstRegistration : x)
        .filter(x => transmission !== "All" ? x.transmission === transmission : x)
        .filter(x => fuel !== "All" ? x.fuel.toLowerCase() === fuel.toLowerCase() : x)
        .filter(x => color !== "All" ? x.color.toLowerCase() === color.toLowerCase() : x)

    // && x.transmission === transmission
    // && x.fuel.toLowerCase() === fuel.toLowerCase()
    // && x.color.toLowerCase() === color.toLowerCase());        
} 
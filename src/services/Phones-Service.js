import { request } from "./requestService"
import api from "./api"

export const createNewPhone = async (
    uid,
    phone,
    name
) => {
    let res = await request(`${api.phones}`, 'POST', { uid, phone, name });

    return res;
}

export const getPhones = async () => {
    let res = await request(`${api.phones}`, 'GET');

    return res;
}
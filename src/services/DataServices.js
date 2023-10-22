import https from '../https-common';
import http from '../http-common';


export async function UserLogin(username, password) {
    try {
        const response = await https.post('/login', { username, password });
        return response;
    }
    catch (error) {
        console.log(error)
    }
}

export async function getClients(data) {
    try {
        const response = await http.get(`/clients?per_page=10&page=${data}`);
        return response;
    }
    catch(error) {
        console.log(error)
    }
}

export async function postClient(data) {
    try {
        const response = await http.post('/clients', data);
        return response;
    }
    catch(error) {
        console.log(error);
    }
}

export async function getSamples(id) {
    try {
        const response = await http.get(`/client/${id}/samples`);
        return response;
    }
    catch(error) {
        console.log(error)
    }
}

export async function postSample(data, id) {
    try {
        const response = await http.post(`/client/${id}/samples`, data);
        return response;
    }
    catch(error) {
        console.log(error);
    }
}

export async function deleteClient(id) {
    try {
        const response = await http.delete(`/clients/${id}`);
        return response;
    }
    catch(error) {
        console.log(error)
    }
}

export async function deleteSample(client, sample) {
    try {
        const response = await http.delete(`/client/${client}/samples/${sample}`);
        return response;
    }
    catch (error) {
        console.log(error)
    }
}

export async function getStat() {
    try {
        const response = await http.get('/stat');
        return response;
    }
    catch (error) {
        console.log(error)
    }
}

export async function getClientById(id) {
    try {
        const response = await http.get(`/clients/${id}`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export async function editSample(client, sample, data) {
    try {
        const response = await http.put(`/client/${client}/samples/${sample}`, data)
        return response;
    }
    catch (error) {
        console.log(error);
    }
}
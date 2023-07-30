import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1"
});

export const calculate = async (body) => {
    try {
        const response = await api.post('/calculate', { body });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

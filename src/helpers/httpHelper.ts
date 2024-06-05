import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const getUsers = async () => {
    const response = await axios.get(`${apiUrl}/alunos`);
    return response.data;
};

import axios from 'axios';

const client = axios.create({
    baseURL: 'https://outside-in-dev-api.herokuapp.com/3ToTrrNrPgh574YKmJnNCShtWKb7ija8git ',
});

const api = {
    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    },
};

export default api;
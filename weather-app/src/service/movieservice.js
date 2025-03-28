import axios from 'axios';//Axios is a popular JavaScript library for making HTTP requests from the browser. It's used here to communicate with your Spring Boot backend.//

// Define the base URL for your backend API
const API_BASE_URL = 'movies/Popular';

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Popular`);
        return response.data;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
}
};
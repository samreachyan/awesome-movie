import axios from "axios";

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = 'api_key=dc1ee0c967c30a5d937bc643addd28ae'

// Popular Movies
export const getPopularMovie = async () => {
    const response = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
    return response.data.results;
}

// Upcoming Movies
export const getUpcomingMovie = async () => {
    const response = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
    return response.data.results;
}

// Top Rated Movies
export const getTopRatedMovie = async () => {
    const response = await axios.get(`${apiUrl}/movie/top_rated?${apiKey}`);
    return response.data.results;
}

import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.API_KEY}`
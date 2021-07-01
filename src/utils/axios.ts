import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTdhODgzMzhjNjRjNDgxOTA3ZTU4NjRlOGIzZWRkYyIsInN1YiI6IjYwZGQ5ZjQwYTEyODU2MDAyNzQ1MjBhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YLtoa5iT5T7uQ8r4MWyLAyZfSSR57r7wh9V8pQjP9j4";

import axios from 'axios'
import { getSet } from '../utils/cache'

export class Movie {
    title: string
    overview: string
    vote: number
    voteCount: number
    releaseDate: Date
    image: string

    public static async discover(): Promise<Array<Movie>> {
        return getSet('discover::movie', async () => {
            const movies = await axios.get('/4/discover/movie')
            return movies.data.results.map(m => {
                const movie = new Movie()
                movie.title = m.original_title
                movie.overview = m.overview
                movie.image = m.poster_path
                movie.vote = m.vote_average
                movie.voteCount = m.vote_count
                movie.releaseDate = new Date(m.release_date)
                return movie
            })
        })

    }
}
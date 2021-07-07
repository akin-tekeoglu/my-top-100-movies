import axios from 'axios'
import { getSet } from '../utils/cache'

export class Movie {
    id: number
    title: string
    overview: string
    vote: number
    voteCount: number
    releaseDate: Date
    image: string
    popularity: number
    language: string
    revenue: number
    budget: number
    runtime: number
    status: string
    tagline: string
    homepage: string
    genres: Array<string>
    productionCompanies: Array<string>

    public static GetAll = async (): Promise<Array<Movie>> =>
        getSet('movie:all', async () => {
            const movies = (await axios.get('/4/discover/movie')).data
            return movies.results.map(Movie.map)
        })


    public static GetById = async (id: number): Promise<Movie> =>
        getSet(`movie:${id}`, async () => {
            const m = (await axios.get(`/3//movie/${id}`)).data
            console.log(m)
            return Movie.map(m)
        })


    private static map(m: any): Movie {
        const movie = new Movie()
        movie.id = m.id
        movie.title = m.original_title
        movie.overview = m.overview
        movie.image = m.poster_path
        movie.vote = m.vote_average
        movie.voteCount = m.vote_count
        movie.releaseDate = m.release_date && new Date(m.release_date)
        movie.popularity = m.popularity
        movie.language = m.original_language
        movie.revenue = m.revenue
        movie.runtime = m.runtime
        movie.status = m.status
        movie.tagline = m.tagline
        movie.budget = m.budget
        movie.homepage = m.homepage
        movie.genres = m.genres && m.genres.map(g => g.name)
        movie.productionCompanies = m.production_companies && m.production_companies.map(p => p.logo_path)
        return movie
    }
}
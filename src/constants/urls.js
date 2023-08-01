const API_key = '42b2dbca38ef021828e064a574016bb2';
const token   = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmIyZGJjYTM4ZWYwMjE4MjhlMDY0YTU3NDAxNmJiMiIsInN1YiI6IjY0YmZiNzJmNmQ0Yzk3MDBhZDU1MTdlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lBUW-wAi0jnLDLwABo4Os4K_f5_TotHMQY9LQfNc_Z4';

const baseURL = 'https://api.themoviedb.org/3';

const home = '/'
const movie = '/movies'
const user = '/account'

const urls = {
    home,
    movie: {
        root: movie,
        single: '/movie',
        service: `/discover/movie`,
        byId: (id) => `/movie/${id}`,
        byPage: (pageNum) => `/discover/movie?page=${pageNum}`
    },
    user: {
        root: user
    },
    genre: {
        movies: `/genre/movie/list`
    }
}

const imgPathRoot = 'http://image.tmdb.org/t/p';
const imgPath = {
    original: `${imgPathRoot}/original`,
    w300: `${imgPathRoot}/w300`
}

export {
    API_key,
    token,
    baseURL,
    urls,
    imgPath
}
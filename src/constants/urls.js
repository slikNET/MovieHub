const IMG_PATH = process.env.REACT_APP_IMG_PATH;

const home = '/'
const movie = '/movies'
const user = '/account'
const genre = '/genres'

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
        root: genre,
        serviceAll: '/genre/movie/list'
    }
}


const imgPath = {
    original: `${IMG_PATH}/original`,
    w300: `${IMG_PATH}/w300`
}

export {
    urls,
    imgPath
}
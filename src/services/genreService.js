import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAllFromMovies: () => apiService.get(urls.genre.movies)
}

export {genreService}
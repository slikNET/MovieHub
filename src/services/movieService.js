import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: () => apiService.get(urls.movie.service),
    betById: (id) => apiService.get(urls.movie.byId(id)),
    betByPage: (page) => apiService.get(urls.movie.byPage(page))
}

export {
    movieService
}
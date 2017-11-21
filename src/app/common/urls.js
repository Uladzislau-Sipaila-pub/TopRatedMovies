export const getTopRated = page =>
    `https://api.themoviedb.org/3/movie/top_rated?api_key=5425801f81cc0f61166c3d37b266cdd1&language=en-US&page=${page}`;

export const getImageUrl = path =>
    `https://image.tmdb.org/t/p/w500${path}`;

export const getMovieUrl = id =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=5425801f81cc0f61166c3d37b266cdd1&language=en-US`;

export const getRecommendedUrl = id =>
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5425801f81cc0f61166c3d37b266cdd1&language=en-US&page=1`;
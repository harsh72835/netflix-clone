const API_KEY = "a26f362054ea6246049375bb68c4c9fb";

const requests = {
    fetchUpcoming : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    
}
export default requests;




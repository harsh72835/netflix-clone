import React, { useState , useEffect} from 'react';
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title ,fetchUrl, isLargeRow}) {
    const [movies , setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            // eslint-disable-next-line
            const request  = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        //[] if it's empty it will run once only that is when page loads
    }, [fetchUrl]);

    // console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {/* several raw posters */}
                
                {movies.map(movie => (
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                    key = {movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}></img>
                ))}
            </div>
        {/* containers --> posters */}
        </div>
    )
}

export default Row;
// import React, { useEffect, useState } from 'react';
// import { getPopularMovies } from '../services/MovieService';

// function PopularMovies() {
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Fetch popular movies from the backend
//         const fetchMovies = async () => {
//             try {
//                 const movieData = await getPopularMovies();
//                 setMovies(movieData);
//             } catch (err) {
//                 setError('Failed to fetch popular movies');
//             }
//         };

//         fetchMovies();
//     }, []);

//     return (
//         <div>
//             <h1>Popular Movies</h1>
//             <button onClick={}>Popular</button>
//             {error && <p>{error}</p>}
//             <ul>
//                 {movies.map((movie, index) => (
//                     <li key={index}>{movie}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default PopularMovies;

import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../service/movieservice';

function PopularMovies() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const fetchMovies = async () => {
        try {
            const movieData = await getPopularMovies();
            setMovies(movieData);
        } catch (err) {
            setError('Failed to fetch popular movies');
        }
    };

    useEffect(() => {
        // Initial fetch of popular movies
        fetchMovies();
    }, []);

    // Button click handler to re-fetch the movies
    // const handleFetchMovies = () => {
    //     fetchMovies();
    // };

    return (
        <div>
            <h1>Popular Movies</h1>
            {/* <button onClick={handleFetchMovies}>Fetch Popular Movies</button> */}
            {error && <p>{error}</p>}
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
}

export default PopularMovies;

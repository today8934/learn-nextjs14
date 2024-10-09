'use client';

import {useEffect, useState} from "react";

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
            const json = await response.json();
            setMovies(json);
            setIsLoading(false);
        }
        getMovies()
    }, []);
    return (
        <div>
            {isLoading ? "Loading..." : JSON.stringify(movies)}
        </div>
    )
}
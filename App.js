import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import ListResult from './src/components/ListResult';
import Search from "./src/components/Search";
import data from "./src/helpers/filmDatas";

export default function App() {
    const [searchText, setSearchText] = useState('mon texte');
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState(data);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getSearchedMovies = (searchedText) => {
        const newMovies = data.filter(movie => movie.title.toLowerCase().includes(searchedText.toLowerCase()));
        setMovies(newMovies);
    }


    const onReachedEnd = () => {
    }

    const fetchMovies = () => {
    }

    useEffect(() => {
        fetchMovies();
        // StatusBar.setHidden(true);
        // StatusBar.setBackgroundColor('#FF573300');
        // StatusBar.setTranslucent(true)
    }, []);

    return (
        <>
            <StatusBar barstyle={'light-content'}/>
            <Search searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)}/>
            <ListResult isLoading={isLoading} movies={movies} searchedText={searchText} onReachedEnd={onReachedEnd}/>
        </>
    );
}

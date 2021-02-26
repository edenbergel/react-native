import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'react-native';
import ListResult from '../components/ListResult';
import Search from "../components/Search";
import { getMoviesFromApiAsync } from '../services/nettwork';

export const SearchScreen = ({navigation : {navigate}}) => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const getSearchedMovies = (searchedText) => {
        console.log(searchedText);
        setSearchText(searchedText);
        setCurrentPage(1);
        setMovies([]);
        fetchMovies(searchedText, currentPage, true);
    }


    const onReachedEnd = () => {
        const incrementPage = currentPage + 1;
        setCurrentPage(incrementPage);

        if (incrementPage <= totalPages) {
            fetchMovies(searchText, incrementPage);
        }
    }

    const fetchMovies = (search_text, current_page, is_searching = false) => {
        setIsLoading(true)
        console.log(search_text, current_page);
        getMoviesFromApiAsync(search_text, current_page).then(moviesJson => {
            if (is_searching == true) {
                setMovies(moviesJson.results);
            } else {
                setMovies([...movies, ...moviesJson.results]);
            }
           
            setTotalPages(moviesJson.total_pages)
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchMovies(searchText, currentPage);
        // StatusBar.setHidden(true);
        // StatusBar.setBackgroundColor('#FF573300');
        // StatusBar.setTranslucent(true)
    }, []);

    return (
        <>
            <StatusBar barstyle={'light-content'}/>
            <Search searchText={searchText} onSearch={(searchedText) => getSearchedMovies(searchedText)}/>
            { isLoading ? <ActivityIndicator></ActivityIndicator> : null }
            <ListResult isLoading={isLoading} movies={movies} searchedText={searchText} onReachedEnd={onReachedEnd} itemClicked={(id) => navigate('Details', {id: id})} />
        </>
    );
}

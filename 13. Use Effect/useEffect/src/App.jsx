import axios from 'axios';
import { useState,useEffect } from "react";
import './App.css';

function App() {
  //var listItems = []
  const [movies,setMovies]= useState([]);
  const [isLoading,setIsLoading]= useState(false);

  async function fetchMovies() {
    setIsLoading(true); 
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if(!response.ok) 
        throw new Error('Api Failed');
      const data = await response.json();

      const newData = data.results.map((movieData) => {
        return {
         title: movieData.title,
         releaseDate: movieData.release_date
        };
      });
  
      setMovies(newData);
      console.log(newData);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
    
  }
  useEffect(() => {fetchMovies()},[]);

  return (
    <div className="App"> 
    {isLoading ?
    <p>Loading...</p> :
    movies.map((movie, index) => {
      return <li key={index}>{movie.title} : {movie.releaseDate}</li>
    })
    }
    </div>
  );
}

export default App;

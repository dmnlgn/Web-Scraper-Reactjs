import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [post, setPost] = useState([]);

  const baseURL = 'http://localhost:8080/pokemon';

  const getRepo = () => {
    axios.get(baseURL)
      .then((response) => {
        let allPokemon = response.data.pokemon;
        setPost(allPokemon);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  };

  useEffect(() => getRepo(), []);

  return (
    <div>
      <h1>Strona główna</h1>
    </div>
  )
};

export default Home;
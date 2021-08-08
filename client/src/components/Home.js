import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [post, setPost] = useState([]);

  const baseURL = 'http://localhost:8080/pokemon';

  const getRepo = () => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      });
  }

  useEffect(() => getRepo(), []);

  if (!post) return null;


  return (
    <div>{post.data}</div>
  );
};

export default Home;
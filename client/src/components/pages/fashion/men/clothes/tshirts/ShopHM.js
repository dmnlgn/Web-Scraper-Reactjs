import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopHM = () => {
  const [post, setPost] = useState([]);

  const baseURL = 'http://localhost:8080/clothes';

  const getRepo = () => {
    axios.get(baseURL)
      .then((response) => {
        let allData = response.data.clothesPage.tshirt;
        setPost(allData);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  };

  useEffect(() => getRepo(), []);

  return (
    <div>
    <table>
      {post.length && post !== 0 ? (
          post.map((item, index) => {
          console.log(index)
          return (
            <tr key={index}>
              <td align="left">{index}</td>
              <td align="left">{item.name}</td>
            </tr>
          )
        })
        ) : (console.log("no data"))
      }
      </table>
    </div>
  )
};

export default ShopHM;
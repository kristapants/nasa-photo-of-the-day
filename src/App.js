import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import { API_KEY, BASE_URL } from './constants/index'
import Header from './Header'
import Body from './Body'

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    // axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    axios.get(`https://api.nasa.gov/planetary/apod/?api_key=Gp1lBYS04ibbD8LlE6jglMHtO7ROQyVz53KpjzFN&date=2020-09-09`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
  
  
  return (
    <div className="App">
      <div className="container">
        <Header 
          title={data.title}
        />
        {(data.url) && <Body
          photoURL={data.url} 
          description={data.explanation}
          hdurl={data.hdurl}
          copyright={data.copyright}
        />}
      </div>
    </div>
  );
}

export default App;

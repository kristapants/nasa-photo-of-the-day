import React, { useState, useEffect } from 'react';
import axios from 'axios'
// import { API_KEY, BASE_URL } from '../constants/index'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Calendar from './Calendar';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    // axios.get(`${BASE_URL}${API_KEY}`)
    axios.get(`https://api.nasa.gov/planetary/apod/?api_key=Gp1lBYS04ibbD8LlE6jglMHtO7ROQyVz53KpjzFN&date=2020-09-10`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <div className="App">
      {/* <div className="container"> */}
        {(data.url) && <Header 
          title={data.title}
        />}
        {(data.url) && <Body
          photoURL={data.url} 
          description={data.explanation}
          copyright={data.copyright}
        />}
        <Calendar />
        {(data.url) && <Footer
          copyright={data.copyright}          
          hdurl={data.hdurl}
        />}
    </div>
  );
}

export default App;

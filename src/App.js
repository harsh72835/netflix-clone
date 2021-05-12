import React from 'react';
import './App.css';
import Row from './Row';
import requests from './Requests.js';
import Banner  from './Banner.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
      {/* nav bar */}
      <Nav/>
      {/* banner */}

      <Banner/>

      <Row title="Upcoming" 
      fetchUrl={requests.fetchUpcoming}
      isLargeRow />
      <Row title="NetFlix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchNetflixOriginals} />

    </div>
  );
}

export default App;

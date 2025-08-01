import React, { useState } from 'react';
import video from '../../Assets/op.mp4';
import './Home.css';

const Home = () => {
  const [price, setPrice] = useState(5000); // Default price

  return (
    <section className='home'>
      <div className="overlay">
        <video src={video} muted autoPlay loop type="op/mp4" width="1500"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">
              Our packages
            </span>
            <h1 className="homeTitle">
              Search your Holidays
            </h1>
          </div>
          <div className="searchBox">
            <div className="inputContainer">
              <input type="text" className="searchInput" placeholder="Search destination" />
            </div>
            <div className="inputContainer">
              <input type="date" className="dateInput" />
            </div>
            <div className="inputContainer">
              <input 
                type="range" 
                className="priceInput" 
                min="0" 
                max="10000" 
                step="100" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span className="priceValue">Price: ₹0 - ₹{price}+</span>
            </div>
          </div>
        </div>    
      </div>
    </section>
  )
}

export default Home
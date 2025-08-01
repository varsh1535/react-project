import React from 'react';
import './About.css';

const About = () => {
return (
    <section className="about container section">
      <div className="secTitle">
        <h3 className="title">About Us</h3>
      </div>
      <div className="aboutContent">
        <p>
          Welcome to our travel website! We are dedicated to helping you explore the world and discover new destinations. Our team of travel experts works tirelessly to provide you with the best travel tips, guides, and recommendations.
        </p>
        <p>
          Whether you are looking for adventure, relaxation, or cultural experiences, we have something for everyone. Our goal is to make your travel planning as easy and enjoyable as possible.
        </p>
        <p>
          Thank you for visiting our website. We hope you find the information and inspiration you need to make your next trip unforgettable.
        </p>
      </div>
    </section>
);
}

export default About;
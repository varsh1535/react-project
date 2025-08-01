import React from 'react';
import img1 from '../../Assets/img1.jpg'; // Import the images
import img2 from '../../Assets/img2.jpeg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpeg';
import img5 from '../../Assets/img5.jpeg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpeg';

import './Main.css';

//array name data//
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'India Gate',
    location: 'Delhi',
    grade: 'Night light',
    description: 'India capital and a National Capital Territory, is a vibrant metropolis with a rich history serving as a major cultural, political, and economic hub, encompassing the historical Old Delhi and the modern New Delhi',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Guwahati',
    location: 'Assam',
    grade: 'View points',
    description: 'a state in Northeast India, famous for its diverse flora and fauna, including the one-horned rhinoceros, and is a major tea-producing region',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Marina Beach',
    location: 'Chennai',
    grade: 'Calm',
    description: 'the vibrant capital of Tamil Nadu, a major commercial, cultural, and economic hub in South India, located on the Coromandel Coast of the Bay of Bengal',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Raja seat Garden',
    location: 'Coorg',
    grade: 'View point',
    description: 'a picturesque hill station in Karnataka, famed for its lush landscapes, coffee plantations, and the unique Kodava culture, often referred to as the "Scotland of India"',
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Munnar',
    location: 'Kerala',
    grade: 'Tea point',
    description: 'a state in southwestern India characterized by its stunning natural beauty',
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Hajan Valley',
    location: 'Kashmir',
    grade: 'View point',
    description: 'a region in the northern Indian subcontinent, is known for its stunning natural beauty, including the Himalayan mountains, lush valleys, and pristine lakes, and is often referred to as "Paradise on Earth"',
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Old Manali',
    location: 'Manali',
    grade: 'Mountains',
    description: 'a picturesque hill station in Karnataka, famed for its lush landscapes, coffee plantations, and the unique Kodava culture, often referred to as the "Scotland of India"',
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Gateway of India',
    location: 'Mumbai',
    grade: 'Luxury',
    description: 'a vibrant, bustling metropolis located on the Konkan coast, known for its rich culture, iconic landmarks, and delicious street food',
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map((item) => (
          <div key={item.id} className="destinationCard">
            <img src={item.imgSrc} alt={item.destTitle} className="destinationImg" />
            <div className="destinationInfo">
              <h4 className="destTitle">{item.destTitle}</h4>
              <span className="location">{item.location}</span>
              <span className="grade">{item.grade}</span>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Main;
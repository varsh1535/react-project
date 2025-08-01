import React, { useState } from 'react';
import img1 from '../../Assets/img1.jpg'; // Import the images
import img2 from '../../Assets/img2.jpeg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpeg';
import img5 from '../../Assets/img5.jpeg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpeg';

import './BookNow.css';

//array name data//
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'India Gate',
    location: 'Delhi',
    grade: 'Night light',
    description: 'India capital and a National Capital Territory, is a vibrant metropolis with a rich history serving as a major cultural, political, and economic hub, encompassing the historical Old Delhi and the modern New Delhi',
    amount: '₹25000',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Guwahati',
    location: 'Assam',
    grade: 'View points',
    description: 'a state in Northeast India, famous for its diverse flora and fauna, including the one-horned rhinoceros, and is a major tea-producing region',
    amount: '₹19000',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Marina Beach',
    location: 'Chennai',
    grade: 'Calm',
    description: 'the vibrant capital of Tamil Nadu, a major commercial, cultural, and economic hub in South India, located on the Coromandel Coast of the Bay of Bengal',
    amount: '₹27000',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Raja seat Garden',
    location: 'Coorg',
    grade: 'View point',
    description: 'a picturesque hill station in Karnataka, famed for its lush landscapes, coffee plantations, and the unique Kodava culture, often referred to as the "Scotland of India"',
    amount: '₹18000',
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Munnar',
    location: 'Kerala',
    grade: 'Tea point',
    description: 'a state in southwestern India characterized by its stunning natural beauty',
    amount: '₹25000',
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Hajan Valley',
    location: 'Kashmir',
    grade: 'View point',
    description: 'a region in the northern Indian subcontinent, is known for its stunning natural beauty, including the Himalayan mountains, lush valleys, and pristine lakes, and is often referred to as "Paradise on Earth"',
    amount: '₹20000',
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Old Manali',
    location: 'Manali',
    grade: 'Mountains',
    description: 'a picturesque hill station in Karnataka, famed for its lush landscapes, coffee plantations, and the unique Kodava culture, often referred to as the "Scotland of India"',
    amount: '₹16000',
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Gateway of India',
    location: 'Mumbai',
    grade: 'Luxury',
    description: 'a vibrant, bustling metropolis located on the Konkan coast, known for its rich culture, iconic landmarks, and delicious street food',
    amount: '₹24000',
  },
];

const BookNow = () => {
  const [selectedPackages, setSelectedPackages] = useState([]);

  const handleCardClick = (packageItem) => {
    setSelectedPackages((prevSelected) => {
      const isAlreadySelected = prevSelected.find((item) => item.id === packageItem.id);
      if (isAlreadySelected) {
        return prevSelected.filter((item) => item.id !== packageItem.id);
      }
      return [...prevSelected, packageItem];
    });
  };

  const handlePayment = () => {
    const totalAmount = selectedPackages.reduce((total, item) => total + parseInt(item.amount.replace('₹', '')), 0);
    alert(`Proceeding to payment of amount: ₹${totalAmount}`);
    // Add your payment handling logic here
  };

  const handleCancel = () => {
    setSelectedPackages([]); // Clear all selected packages
  };

  return (
    <section className="booknow container section">
      <div className="secTitle">
        <h3 className="title">Book Your Trip Now</h3>
      </div>
      <div className="booknowContent">
        <p>
          Ready to explore the world? Book your trip with us today and embark on an unforgettable adventure!
        </p>
        <div className="paymentSection">
          <div className="selectedPackages">
            {selectedPackages.map((item) => (
              <div key={item.id} className="selectedPackageCard">
                <img src={item.imgSrc} alt={item.destTitle} className="selectedPackageImg" />
                <div className="selectedPackageInfo">
                  <h4 className="destTitle">{item.destTitle}</h4>
                  <span className="amount">{item.amount}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="buttonGroup">
            <button className="paymentButton" onClick={handlePayment}>Proceed to Payment</button>
            <button className="cancelButton" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>

      <div className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map((item) => (
          <div key={item.id} className={`destinationCard ${selectedPackages.find((pkg) => pkg.id === item.id) ? 'selected' : ''}`} onClick={() => handleCardClick(item)}>
            <img src={item.imgSrc} alt={item.destTitle} className="destinationImg" />
            <div className="destinationInfo">
              <h4 className="destTitle">{item.destTitle}</h4>
              <span className="location">{item.location}</span>
              <span className="grade">{item.grade}</span>
              <p className="description">{item.description}</p>
              <span className="amount">{item.amount}</span> {/* Display amount */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookNow;
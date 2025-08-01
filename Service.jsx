import React from 'react';
import { FaCar, FaHotel, FaPlane } from 'react-icons/fa';
import './Service.css';

const services = [
{
    id: 1,
    icon: <FaPlane />,
    title: 'Flight Booking',
    description: 'Book flights to your favorite destinations with ease and convenience.',
},
{
    id: 2,
    icon: <FaHotel />,
    title: 'Hotel Booking',
    description: 'Find and book the best hotels at great prices.',
},
{
    id: 3,
    icon: <FaCar />,
    title: 'Car Rentals',
    description: 'Rent cars for your travel and enjoy your journey.',
},
];

const Service = () => {
return (
    <section className="service container section">
      <div className="secTitle">
        <h3 className="title">Our Services</h3>
      </div>
      <div className="secContent grid">
        {services.map(service => (
          <div key={service.id} className="serviceCard">
            <div className="serviceIcon">
              {service.icon}
            </div>
            <h4 className="serviceTitle">{service.title}</h4>
            <p className="serviceDescription">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
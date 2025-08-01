/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex"> {/* Use Link instead of a */}
            <h1><MdOutlineTravelExplore className="icon" />VISTA</h1>
          </Link>
        </div>

        <div className="navBar">
          <ul className="navlists flex">
            <li className="navItem">
              <Link to="/" className="navlink">Home</Link> {/* Use Link instead of a */}
            </li>

            <li className="navItem">
              <Link to="/services" className="navlink">Service</Link> {/* Use Link instead of a */}
            </li>
            <li className="navItem">
              <Link to="/about" className="navlink">About</Link> {/* Use Link instead of a */}
            </li>
            <li className="navItem">
              <Link to="/contact" className="navlink">Contact</Link> {/* Use Link instead of a */}
            </li>
            <li className="navItem">
              <Link to="/booknow" className="navlink">Book Now</Link> {/* Add Book Now link */}
            </li>
          </ul>
          <div className="closeNavbar">
            <IoIosCloseCircle />
          </div>
        </div>
        <div className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  )
}

export default Navbar;

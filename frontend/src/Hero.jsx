import React from 'react';
import banner from '../src/assets/automobile_banner.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center text-white px-6"
      style={{
        backgroundImage: `url(${banner})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
      >
        <div className="text-center max-w-2xl bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Finding the Balance: Learn vs. Earn
          </h1>
          <p className="text-lg md:text-xl mb-6 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
            Join our exclusive speaker session and explore the perfect balance between knowledge and financial growth.
          </p>
          <Link to="/register">
        <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
          Register Now
        </button>
      </Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  

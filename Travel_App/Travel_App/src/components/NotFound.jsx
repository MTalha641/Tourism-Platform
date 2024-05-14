import React from 'react';
import { Link } from 'react-router-dom';
// Import Header component if needed
// import Header from './../components/Header';

const NotFound = () => {
  return (
    <>
      {/* Uncomment the line below if the Header component is needed */}
      {/* <Header /> */}
      <div className="container mx-auto my-10">
        <div className="flex flex-col items-center">
          <h4 className="text-center text-lg mb-8 md:mb-20 font-medium">Page Not Found</h4>
          <img
            className="w-full h-72 object-contain"
            src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
            alt="Page Not Found"
          />
          <Link to="/home" className="btn mt-10 bg-green-500 text-white px-10 py-2 rounded text-lg no-underline hover:bg-green-600">
            Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;

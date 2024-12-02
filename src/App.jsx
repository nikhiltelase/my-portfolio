import React from 'react';
import Home from './pages/Home';
import { Helmet } from 'react-helmet'; // Add React Helmet for SEO optimization

function App() {
  return (
    <>
      {/* SEO Optimization with React Helmet */}
      <Helmet>
        <title>Nikhil Telase - Portfolio</title>
        <meta name="description" content="Nikhil Telase's Portfolio - A Developer and Innovator" />
        <meta name="keywords" content="React, Python, MERN Stack, IoT, Robotics, AI, Developer Portfolio" />
      </Helmet>

      <div className="bg-dark-200 min-h-screen">
        <Home />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Map from './Map';

function App() {
   // Framer Motion variants for fadeIn animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div initial="hidden" animate="visible"  variants={fadeIn} className="App">
  {/* Header section */}
      <header>
        <motion.h1 initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 3 }} >Cloud Integration Project</motion.h1>
      </header>  
  {/* Main content */}
      <main>
  {/* Welcome section with introductory message */}
      <motion.section
            className="Welcome" initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} >
          <h2>Welcome to Our Website</h2>
          <p>
            Welcome to our commercial haven, where exquisite products meet unbeatable prices. Explore a world of quality and style curated just for you. <br /> Visit us at our locations on the maps below.
          </p>
        </motion.section>
  {/* Maps section with location details */}
        <div className="maps-container">
          <motion.section
            className="map" initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x:0 }} transition={{ duration: 2 }} >
            <h2>Adresse 1</h2>
            <Map center={{ lat: 36.8120175244424, lng: 10.165080894184797 }} />
          </motion.section>

          <motion.section
            className="map" initial={{ opacity: 0, x:100 }} animate={{ opacity: 1 ,x:0 }} transition={{ duration: 2 }} >
            <h2>Adresse 2</h2>
            <Map center={{ lat: 35.8288175, lng: 10.6405392 }} />
          </motion.section>
        </div>
      </main>
  {/* Footer section */}
      <footer>
        <p>&copy; 2024 Cloud Integration Project</p>
      </footer>
    </motion.div>
  );
}

export default App;

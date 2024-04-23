import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LakesSection from './LakesSection';
import HomePage from './HomePage';
import ExplorePakistan from './ExplorePakistan';
import SaifUlMalook from './SaifUlMalook';
import Attabad from './Attabad';
import Shangrila from './Shangrila';
import Trips from './Trips';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore-pakistan" element={<ExplorePakistan />} />
        <Route path="/saif-ul-malook" element={<SaifUlMalook />} />
        <Route path="/attabad-lake" element={<Attabad />} />
        <Route path="/shangrila-lake" element={<Shangrila />} />
        <Route path="/trips" element={<Trips />} /> {/* Add new route for Trips */}
        <Route path="*" element={<LakesSection />} /> {/* Wildcard route for unknown paths */}
      </Routes>
    </Router>
  );
};

export default App;

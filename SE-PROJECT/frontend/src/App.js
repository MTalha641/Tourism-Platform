import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LakesSection from './LakesSection';
import HomePage from './HomePage';
import ExplorePakistan from './ExplorePakistan';
import SaifUlMalook from './SaifUlMalook';
import Attabad from './Attabad';
import Shangrila from './Shangrila';
import Trips from './Trips';
import Hunza from './Hunza';
import KPK from './KPK';
import Kashmir from './Kashmir';
import Search from './components/Search.js'
import Login from './components/Login.js';
import Register from './components/Register.js';
 import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route path="/hunza" element={<Hunza />} /> {/* Add new route for Trips */}
        <Route path="/kpk" element={<KPK />} /> {/* Add new route for Trips */}
        <Route path="/kashmir" element={<Kashmir />} /> {/* Add new route for Trips */}
        <Route path = "/search" element= {<Search/>}> </Route>
        <Route path="*" element={<LakesSection />} /> {/* Wildcard route for unknown paths */}
        <Route path="/login" element={<Login />} /> {/* Add new route for Trips */}
        <Route path="/register" element={<Register/>} /> {/* Add new route for Trips */}
      </Routes>
    </Router>
  );
};

export default App;

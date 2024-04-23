import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './LakesSection.css'; // Import the CSS file

const LakesSection = () => {
  return (
    <div className="lakes-section">
      <h3>Famous Lakes in Pakistan</h3>
      <div className="lake-container">
        {/* Link to Saif ul Malook page */}
        <Link to="/saif-ul-malook" className="lake-link">
          <div className="lake">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lake_Saif_ul_Malook_-_Naran.jpg/1024px-Lake_Saif_ul_Malook_-_Naran.jpg" alt="Lake Saif ul Malook" />
            <p>Lake Saif ul Malook</p>
          </div>
        </Link>
        {/* Link to Attabad Lake page */}
        <Link to="/attabad-lake" className="lake-link">
          <div className="lake">
            <img src="https://www.travelertrails.com/wp-content/uploads/2022/09/1602294586-1.jpg" alt="Attabad Lake" />
            <p>Attabad Lake</p>
          </div>
        </Link>
        {/* Link to Shangrila Lake page */}
        <Link to="/shangrila-lake" className="lake-link">
          <div className="lake">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Shangrila%2C_Lower_Kachura_Lake.jpg/396px-Shangrila%2C_Lower_Kachura_Lake.jpg" alt="Shangrila Lake" />
            <p>Shangrila Lake</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LakesSection;

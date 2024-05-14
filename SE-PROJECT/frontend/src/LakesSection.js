import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './LakesSection.css'; // Import the CSS file, if additional styling is needed

const LakesSection = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Famous Lakes in Pakistan</h3>
      <div className="row">
        {/* Link to Saif ul Malook page */}
        <div className="col-md-4 mb-3">
          <Link to="/saif-ul-malook" className="text-decoration-none">
            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Lake_Saif_ul_Malook_-_Naran.jpg/1024px-Lake_Saif_ul_Malook_-_Naran.jpg" 
                   className="card-img-top" 
                   alt="Lake Saif ul Malook" />
              <div className="card-body">
                <p className="card-text text-center">Lake Saif ul Malook</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to Attabad Lake page */}
        <div className="col-md-4 mb-3">
          <Link to="/attabad-lake" className="text-decoration-none">
            <div className="card">
              <img src="https://www.travelertrails.com/wp-content/uploads/2022/09/1602294586-1.jpg" 
                   className="card-img-top" 
                   alt="Attabad Lake" />
              <div className="card-body">
                <p className="card-text text-center">Attabad Lake</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to Shangrila Lake page */}
        <div className="col-md-4 mb-3">
          <Link to="/shangrila-lake" className="text-decoration-none">
            <div className="card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Shangrila%2C_Lower_Kachura_Lake.jpg/396px-Shangrila%2C_Lower_Kachura_Lake.jpg" 
                   className="card-img-top" 
                   alt="Shangrila Lake" />
              <div className="card-body">
                <p className="card-text text-center">Shangrila Lake</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LakesSection;

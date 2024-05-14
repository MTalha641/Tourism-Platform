import React from 'react';
import { Link } from 'react-router-dom';

const HillStationsSection = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Famous Hill Stations in Pakistan</h3>
      <div className="row">
        {/* Link to Murree page */}
        <div className="col-md-4 mb-3">
          <Link to="/murree" className="text-decoration-none">
            <div className="card">
              <img src="https://media.gettyimages.com/id/1444554732/photo/high-angle-view-of-townscape-against-sky-murree-khyber-pakhtunkhwa-pakistan.jpg?s=612x612&w=0&k=20&c=0ep0ItYa0Av55PCIytz9D4xiZVayU375JbJYqxmi3bM=" 
                   className="card-img-top" 
                   alt="Murree" />
              <div className="card-body">
                <p className="card-text text-center">Murree</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to Nathia Gali page */}
        <div className="col-md-4 mb-3">
          <Link to="/nathia-gali" className="text-decoration-none">
            <div className="card">
              <img src="https://media.gettyimages.com/id/512486841/photo/nathia-gali.jpg?s=612x612&w=0&k=20&c=Ua20-ZupXzWlMND5P11Smm_RzchAtXzPAYWoa-R4W-U=" 
                   className="card-img-top" 
                   alt="Nathia Gali" />
              <div className="card-body">
                <p className="card-text text-center">Nathia Gali</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to Swat Valley Hill Station page */}
        <div className="col-md-4 mb-3">
          <Link to="/swat-valley-hill-station" className="text-decoration-none">
            <div className="card">
              <img src="https://media.gettyimages.com/id/171178525/photo/swat-valley.jpg?s=612x612&w=0&k=20&c=gnKsM_-u-FvAReYgzUyjlxsa0ZU6yBLB4LCIIzOOEWE=" 
                   className="card-img-top" 
                   alt="Swat Valley Hill Station" />
              <div className="card-body">
                <p className="card-text text-center">Swat Valley Hill Station</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HillStationsSection;

import React from 'react';
import { Link } from 'react-router-dom';

const ValleysSection = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Famous Valleys in Pakistan</h3>
      <div className="row">
        {/* Link to Hunza Valley page */}
        <div className="col-md-4 mb-3">
          <Link to="/hunza-valley" className="text-decoration-none">
            <div className="card">
              <img src="https://media.gettyimages.com/id/871897356/photo/view-over-passu-in-autumn-karakoram-highway-pakistan.jpg?s=612x612&w=0&k=20&c=oG5ZYWplHDOWWIlbg0iHQ8Rlk16rmSnTPldiNiYM5CI=" 
                   className="card-img-top" 
                   alt="Hunza Valley" />
              <div className="card-body">
                <p className="card-text text-center">Hunza Valley</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to Neelum Valley page */}
        <div className="col-md-4 mb-3">
          <Link to="/neelum-valley" className="text-decoration-none">
            <div className="card">
              <img src="https://media.gettyimages.com/id/173516763/photo/to-go-with-lifestyle-pakistan-unrest-tourism-feature-by-sajjad-qayyum-in-this-photograph-taken.jpg?s=612x612&w=gi&k=20&c=mDGpFpboOGcLSDkN15RQss23wURTuDm2xWWHK6HM-Tw=" 
                   className="card-img-top" 
                   alt="Neelum Valley" />
              <div className="card-body">
                <p className="card-text text-center">Neelum Valley</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to Kalash Valley page */}
        <div className="col-md-4 mb-3">
          <Link to="/kalash-valley" className="text-decoration-none">
            <div className="card">
              <img src="https://media.gettyimages.com/id/612584728/photo/on-the-roof-of-a-pasti-a-kalash-woman-dries-her-winter-provisions-location-guru-birir-valley.jpg?s=612x612&w=0&k=20&c=-6hdwA29JaXMfGcA5uzy1c5NAXNJoN5I_UJTYpv9aIQ=" 
                   className="card-img-top" 
                   alt="Kalash Valley" />
              <div className="card-body">
                <p className="card-text text-center">Kalash Valley</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ValleysSection;

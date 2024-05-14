import React from 'react';
import { Link } from 'react-router-dom';

const BeachesSection = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Famous Beaches in Pakistan</h3>
      <div className="row">
        {/* Link to Clifton Beach page */}
        <div className="col-md-4 mb-3">
          <Link to="/clifton-beach" className="text-decoration-none">
            <div className="card">
              <img src="https://media.gettyimages.com/id/618413018/photo/streets-of-karachi.jpg?s=612x612&w=0&k=20&c=heIj3wHigadrL-DBbaDgt02SoN2cZquGftxp4oP6KNs=" 
                   className="card-img-top" 
                   alt="Clifton Beach" />
              <div className="card-body">
                <p className="card-text text-center">Clifton Beach</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to French Beach page */}
        <div className="col-md-4 mb-3">
          <Link to="/french-beach" className="text-decoration-none">
            <div className="card">
              <img src="https://wpassets.graana.com/blog/wp-content/uploads/2022/11/image-8.jpg" 
                   className="card-img-top" 
                   alt="French Beach" />
              <div className="card-body">
                <p className="card-text text-center">French Beach</p>
              </div>
            </div>
          </Link>
        </div>
        {/* Link to Manora Beach page */}
        <div className="col-md-4 mb-3">
          <Link to="/manora-beach" className="text-decoration-none">
            <div className="card">
              <img src="https://www.thenews.com.pk/assets/uploads/akhbar/2021-10-31/904589_2234477_Manora-beach-opens-to-public-after-renovation_akhbar.jpg" 
                   className="card-img-top" 
                   alt="Manora Beach" />
              <div className="card-body">
                <p className="card-text text-center">Manora Beach</p>
              </div>
            </div>
            </Link>
    </div>
  </div>
</div>
);
};
export default BeachesSection

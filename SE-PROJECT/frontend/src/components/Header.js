import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import {useNavigate} from 'react-router-dom'

export default function Header() {
    const [dropDown, setDropDown] = useState(false);
    const isLoggedIn = checkLoggedIn(); // You need to implement this function
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    function toggleDropDown() {
    setDropDown(!dropDown);
  }

    const handleSignOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    function checkLoggedIn() {
        // Implement your logic to check if the user is logged in
        // For example, you might check if there is a user object in localStorage or in your state
        // Return true if logged in, false otherwise
        return localStorage.getItem('userInfo');
    }
    

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter a destination");
      return;
    }
    navigate(`/search?key=${encodeURIComponent(searchQuery)}`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img src="https://flowbite.com/docs/images/logo.svg" alt="" className="rounded-circle me-2" />
                    Travel App
                </a>
                <button className="navbar-toggler" type="button" onClick={toggleDropDown}>
                    {dropDown ? <MdClose /> : <HiMenuAlt3 />}
                </button>
                <div className={"collapse navbar-collapse" + (dropDown ? " show" : "")}>
                <form onSubmit={handleSubmit} className="d-flex align-items-centre">
                  <input
                   className="form-control me-2"
                   type="search"
                  placeholder="Search for your destination"
                   value={searchQuery}
                   onChange={handleSearchChange}
                  />
                 <button className="btn btn-primary" type="submit">Search</button>
                </form>                 
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/trips">Tours</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/bookedtours">My Booking</a>
                        </li>
                        <li className="nav-item">
                            {isLoggedIn ? (
                                <button onClick={handleSignOut} className="btn btn-primary">
                                    Sign Out
                                </button>
                            ) : (
                                <a className="nav-link" href="/login">Login</a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

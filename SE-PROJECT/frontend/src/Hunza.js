import React from 'react';
import { Link } from 'react-router-dom';
import LakesSection from './LakesSection'; // Import LakesSection component
import './Hunza.css';

const locations = [
    {
        image: { url: "https://source.unsplash.com/random?lakes", alt: "Travel Destination" },
        title: "Machu Picchu, Hunza",
        description: "Explore the ancient Inca citadel nestled in the Andes mountains. Experience the best lakes in the Hunza and enjoy your vacations to the fullest.",
        price: 2499,
        date: new Date("2023-05-15")
    },
    {
        image: { url: "https://source.unsplash.com/random?river", alt: "Travel Destination" },
        title: "Swiss Alps, Switzerland",
        description: "Discover the breathtaking beauty of the Swiss Alps. Enjoy skiing, snowboarding, and stunning panoramic views.",
        price: 3499,
        date: new Date("2023-06-20")
    },
    {
        image: { url: "https://source.unsplash.com/random?beaches", alt: "Travel Destination" },
        title: "Maui, Hunza",
        description: "Relax on the pristine beaches of Maui. Snorkel in crystal-clear waters and witness stunning sunsets over the Pacific Ocean.",
        price: 2999,
        date: new Date("2023-08-10")
    },
    {
        image: { url: "https://source.unsplash.com/random?swamp", alt: "Travel Destination" },
        title: "Amazon Rainforest, Brazil",
        description: "Embark on an adventure through the world's largest tropical rainforest. Encounter diverse wildlife and indigenous cultures.",
        price: 3899,
        date: new Date("2023-09-25")
    }
];


const Hunza = () => {
    return (
        <>
            <div className="">
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/trips">Trips</Link></li>
                        <li><Link to="/explore-pakistan">Explore Pakistan</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
                <h2>Hunza Lakes</h2>
                <div className="destination-categories">
                    <div className='location-cards'>
                    {locations.map((location) => (
                        <div className="location-card">
                            <img
                                alt={location.image.alt}
                                src={location.image.url}
                                width="300"
                                height="300"
                            />
                            <div className="description">
                                <div className="space-y-1">
                                    <h3>{location.title}</h3>
                                    <p>
                                        {location.description}
                                    </p>
                                </div>
                            </div>
                            <div className="pricing">
                                <h3>
                                    <span className="text-primary">Rs. {location.price}</span>
                                    {" "}per person
                                </h3>
                                <p>Departs {location.date.toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Hunza;

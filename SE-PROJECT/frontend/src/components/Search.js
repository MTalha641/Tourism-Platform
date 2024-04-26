import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("key");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/trips/search?destination=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error:", error);
        // alert("Failed to fetch data");
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  const formatDate = (dateString) => {
    try {
      // Check if the dateString is an object with $date key
      const dateObject = dateString.$date ? dateString.$date : dateString;
      const date = new Date(dateObject);
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      return formattedDate;
    } catch (error) {
      console.error("Error parsing date:", error);
      return "Invalid Date";
    }
  };

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      {searchResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="destination-categories">
          <div className="location-cards">
            {searchResults.map((result, index) => (
              <div key={index} className="location-card">
                <img
                  alt={result.image.alt}
                  src={result.image.url}
                  width="300"
                  height="300"
                />
                <div className="description">
                  <div className="space-y-1">
                    <h3>{result.destination}</h3>
                    <p>{result.description}</p>
                  </div>
                </div>
                <div className="pricing">
                  <h3>
                    <span className="text-primary">Rs. {result.price}</span> per person
                  </h3>
                  <p>Departs {formatDate(result.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

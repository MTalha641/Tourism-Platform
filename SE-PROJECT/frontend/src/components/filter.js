import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Filter = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("key");

  useEffect(() => {
    const fetchFilteredResults = async () => {
      try {
        const filterParams = new URLSearchParams(location.search);
        const maxDate = filterParams.get('maxDate');
        console.log("Filter parameters:", maxDate); // Check filter parameters

        let url = `http://localhost:8081/api/trips/searchdate?`;
        if (maxDate) {
          url += `maxDate=${maxDate}`;
        }
        console.log("Filter URL:", url); // Check filter URL

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("Filtered results:", data); // Check fetched data
        setFilteredResults(data);
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to fetch data");
      }
    };

    if (searchQuery) {
      fetchFilteredResults();
    }
  }, [location.search, searchQuery]);

  const formatDate = (dateString) => {
    try {
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
      <h2>Filtered Results for "{searchQuery}"</h2>
      {filteredResults.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="destination-categories">
          <div className="location-cards">
            {filteredResults.map((result, index) => (
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

export default Filter;

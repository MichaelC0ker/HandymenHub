import React from "react";
import "./Jobs.css"; // Make sure to have the CSS file for the updated styles

interface JobTileProps {
  image: string;
  title: string;
  slogan: string;
  description: string;
  price: string;
  rating: number;
  verified: boolean;
}

const JobTile: React.FC<JobTileProps> = ({
  image,
  title,
  slogan,
  description,
  price,
  rating,
  verified
}) => {

  return (
    <div className="job-tile">

      <div className="job-image">
        <img src={image} alt={title} />
        <button className="book-button">Book/Hire</button>
      </div>

      <div className="job-details">
        <h2>{title}
        {verified && <span className="verified-icon">✅</span>} 
        </h2>
        <h3>{slogan}</h3>
        <p>{description}</p>
      </div>

      
      <div className="job-rating">
    
        <h3>R{price}/h</h3>
      <div className="job-stars">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="star-icon">
            ⭐
          </span>
        ))}
        </div>
      </div>
    </div>
  );
};

export default JobTile;

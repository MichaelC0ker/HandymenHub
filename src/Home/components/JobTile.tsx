import React from "react";
import "./Jobs.css"; // Make sure to have the CSS file for the updated styles

interface JobTileProps {
  image: string;
  title: string;
  slogan: string;
  description: string;
  price: number;
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
    <main className="job-tile">

      <section className="job-image">
        <img src={image} alt={title} />
        <button className="book-button">Book/Hire</button>
      </section>

      <section className="job-details">
        <h2>{title}
          {verified && <span className="verified-icon">✅</span>}
        </h2>
        <h3>{slogan}</h3>
        <p>{description}</p>
      </section>


      <section className="job-rating">

        <h3>R{price}/h</h3>
        <card className="job-stars">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="star-icon">
              ⭐
            </span>
          ))}
        </card>
      </section>
    </main>
  );
};

export default JobTile;

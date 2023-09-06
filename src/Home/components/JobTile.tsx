import React from "react";
import "./Jobs.css"; 

interface JobTileProps {
  image: string;
  title: string;
  slogan: string;
  description: string;
  category: string
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
  category,
  verified
  
}) => {
  const handleBookButtonClick = () => {
    const jobDetails = {
      image,
      title,
      slogan,
      description,
      price,
      category,
      rating,
      verified
    };

    console.log("Clicked Job Details:", jobDetails);
  };

  return (
    <main className="job-tile">

      <section className="job-image">
        <h2>{category}</h2>
        <img src={image} alt={title} />
        <button className="book-button" onClick={handleBookButtonClick}>Book</button>
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
        <div className="job-stars">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} className="star-icon">
              ⭐
            </span>
          ))}
        </div>
      </section>
    </main>
  );
};

export default JobTile;

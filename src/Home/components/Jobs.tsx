import React from 'react';
import './Jobs.css';
import Plumbing from '../../Assets/plumbing.jpeg';
import electrical from '../../Assets/electrical.jpeg';
import carpentry from '../../Assets/carpentry.jpeg';
import gardening from '../../Assets/gardening.jpeg';
import pool from '../../Assets/pool.jpeg';
import painting from '../../Assets/painting.jpeg';
import  JobTile from './JobTile';

interface HandymanJob {
  id: number;
  title: string;
  image: string;
  slogan: string;
  description: string;
  rating: number;
  category: string;
  price: number;
  verified: boolean;
}

const Jobs: React.FC = () => {
  const handymanJobs: HandymanJob[] = [
    {
      id: 1,
      title: 'Max Plumbing',
      image: Plumbing,
      category:'Plumbing',
      rating: 4,
      price: 250,
      verified:true,
      slogan: "Flowing Solutions for Every Drop.",
      description:"Welcome to Max Plumbing, your trusted plumbing partner. Our experienced plumbers keep the water flowing smoothly and pipes intact. Whether it's a dripping faucet, a clogged drain, or a complete plumbing overhaul, we're here with reliable solutions. Trust us for expert craftsmanship that ensures comfort and convenience."
    
    },
    {
      id: 2,
      title: 'Enzo Electronics',
      image: electrical,
      category: 'Electrical Repairs',
      rating: 5,
      price: 250,
      verified:true,
      slogan: "Powering Your World, Safely and Brightly.",
      description:"At Enzo Electronics, we power up your world with precision and safety. Our certified electricians are dedicated to providing top-tier electrical solutions for homes and businesses. From installations to repairs and energy-efficient upgrades, we light the path toward seamless electrical systems, keeping you connected and secure."

    },
    {
      id: 3,
      title: 'Ikea',
      image: carpentry,
      category: 'Carpentry',
      rating: 4,
      price: 250,
      verified:true,
      slogan: "Crafting Spaces, Building Dreams.",
      description:"Craftsmanship that stands the test of time is what defines Ikea. Our skilled carpenters craft elegant solutions that marry function and aesthetics seamlessly. From custom furniture to intricate woodwork, we shape spaces that reflect your unique style, leaving a mark of excellence."

    },
    {
      id: 4,
      title: '@Canvas',
      image: painting,
      category: 'Painting and Decorating',
      rating: 1,
      price: 250,
      verified:false,
      slogan: "Brushing Dreams to Life, One Stroke at a Time.",
      description:"Transforming spaces, coloring dreams – that's our promise at Canvas. With a palette of expertise and a brush of creativity, our skilled painters breathe life into walls. From residential makeovers to commercial revamps, we capture your vision on canvas and turn it into reality."
    },
    {
      id: 5,
      title: 'Pool and Works',
      image: pool,
      category: 'Pool Work',
      rating: 3,
      price: 250,
      verified:true,
      slogan: "Dive into Perfection, Swim in Excellence.",
      description:"Dive into luxury with Pool and Works pool services. Our pool experts create aquatic escapes that dazzle the senses. From pool design and construction to maintenance and repairs, we're your partners in turning backyard dreams into water-inspired realities."
    },
    {
      id: 6,
      title: 'Daily Sun',
      image: gardening,
      category: 'Gardening',
      rating: 2,
      price: 250,
      verified:true,
      slogan: "Nurturing Nature, One Garden at a Time.",
      description:"At The Daily Sun, we're passionate about creating vibrant and thriving outdoor spaces. Our skilled team of garden enthusiasts brings nature's beauty to life through meticulous landscaping, expert plant care, and innovative design. From serene residential gardens to stunning commercial landscapes, we cultivate spaces that inspire and rejuvenate."
    },
  ];

  return (
    <main className="jobs-container">
      <section className="job-tiles">
        {handymanJobs.map(job => (
          <JobTile key={job.id} title={job.title} image={job.image} slogan={job.slogan} description={job.description} rating={job.rating} price={job.price} verified={job.verified} category={job.category}/>
        ))}
      </section>
    </main>
  );
};

export default Jobs;

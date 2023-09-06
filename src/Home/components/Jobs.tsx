import React, { useState } from 'react';
import './Jobs.css';
import Plumbing from '../../Assets/plumbing.jpeg';
import electrical from '../../Assets/electrical.jpeg';
import carpentry from '../../Assets/carpentry.jpeg';
import gardening from '../../Assets/gardening.jpeg';
import pool from '../../Assets/pool.jpeg';
import painting from '../../Assets/painting.jpeg';
import JobTile from './JobTile';

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

const [getAdvertList, setAdvertList] = useState([]);
const url = 'https://rxkz2qmrji.eu-west-1.awsapprunner.com/adverts';
const token = localStorage.getItem("JWT");

const headers = new Headers();
headers.append('Authorization', `Bearer ${token}`);
headers.append('Content-Type', 'application/json');

const requestOptions: RequestInit = {
  method: 'GET',
  headers: headers,
};

async function getAdverts(): Promise<any> {
  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      setAdvertList(data);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });

}

const Jobs: React.FC = () => {
  return (
    <main className="jobs-container" onLoad={getAdverts()}>
      <section className="job-tiles">
        {getAdvertList.map(job => (
          <JobTile key={job.id} title={job.title} image={job.image} slogan={job.slogan} description={job.description} rating={job.rating} price={job.price} verified={job.verified} category={job.category} />
        ))}
      </section>
    </main>
  );
}

export default Jobs;

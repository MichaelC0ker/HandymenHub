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

interface AdvertResponse {
  advert_data: HandymanJob[];
  owner: number;
  advert_id: number
};

function getAdverts(setAdvertList: any) {
  const url = 'https://rxkz2qmrji.eu-west-1.awsapprunner.com/adverts';
  const token = localStorage.getItem("JWT");

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  headers.append('Content-Type', 'application/json');

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
  };

  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setAdvertList(data.data);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });

}

const Jobs: React.FC = () => {
  const [getAdvertList, setAdvertList] = useState<AdvertResponse[]>([]);

  getAdverts(setAdvertList);

  return (

    <main className="jobs-container">
      <section className="job-tiles">
        {getAdvertList.map(job => {
          let resp = job.advert_data[0];
          return  <JobTile key={job.advert_id} title={resp.title} image={resp.image} slogan={resp.slogan} description={resp.description} rating={resp.rating} price={resp.price} verified={resp.verified} category={resp.category} />
        })}
      </section>
    </main>
  );
}

export default Jobs;

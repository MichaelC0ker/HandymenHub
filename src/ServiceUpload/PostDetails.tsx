import React, { useState } from 'react';
import './PostDetails.css';


const PostDetails: React.FC = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [providerName, setproviderName] = useState('');
  const [cellPhone, setcellPhone] = useState('');
  const [email, setEmail] = useState('');
  const [hours, setHours] = useState('');

  const handleTaskDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(event.target.value);
  };

  const handleProviderChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setproviderName(event.target.value);
  };


  const handleContactMethodChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setcellPhone(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };
  const handleHoursChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHours(event.target.value);
  };

  function getUserID(){
    const userID = localStorage.getItem("guid");
    const url = `https://rxkz2qmrji.eu-west-1.awsapprunner.com/users/${userID}`;
    const token = localStorage.getItem("JWT");
  
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/json');
  
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: headers
    };
  
    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        handleSubmit(data.data[0].user_id);
        return data.data[0].user_id;
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        return "";
      });
  }

  function getImage(){
    var picList:string[]=["../Assets/carpentry.jpeg","../Assets/electrical.jpeg","../painting.jpeg"];
    return picList[Math.floor(Math.random() * 3)];
  }
  
  function handleSubmit(userId: string) {
    const url = 'https://rxkz2qmrji.eu-west-1.awsapprunner.com/adverts';
    const token = localStorage.getItem("JWT");
    const owner = parseInt(userId);
    console.log("Final user id: " + owner);
    const requestData = {
      "owner":owner,
      "advert_data":
        [
          {
            "title": providerName,
            "image":  getImage(),
            "category": "Carpentry",
            "rating": 4,
            "price": 450,
            "verified": true,
            "slogan": "Crafting Spaces, Building Dreams.",
            "description": taskDescription
           }
        ]
    };

    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/json');

    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: headers
    };

    console.log(requestOptions)

    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response;
      })


  };

  return (
    <main className="container">
      <h1 className="heading">Fill in the details of the services you offer</h1>
      <textarea
        className="textarea"
        placeholder="Service Provider name"
        value={providerName}
        onChange={handleProviderChange}
      />
      <textarea
        className="textarea"
        placeholder="Give a short description of the service you offer"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
      />

      <textarea
        className="textarea"
        placeholder="Telephone number"
        value={cellPhone}
        onChange={handleContactMethodChange}
      />

      <textarea
        className="textarea"
        placeholder="Personal/Company Email"
        value={email}
        onChange={handleEmailChange}
      />

      <textarea
        className="textarea"
        placeholder="Operating hours"
        value={hours}
        onChange={handleHoursChange}
      />

      <button className="button" type="button" onClick={()=>{getUserID()}}>Send Booking</button>
    </main>
  );
};

export default PostDetails;

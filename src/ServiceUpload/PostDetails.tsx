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

 

  const handleSubmit = () => {
    console.log('Form data:', {
      taskDescription,
    });
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

      <button className="button" onClick={handleSubmit}>Send Booking</button>
    </main>
  );
};

export default PostDetails;

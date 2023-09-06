import React, { useState } from 'react';
import './Booking.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking: React.FC = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskAddress, setTaskAddress] = useState('');
  const [taskDate, setTaskDate] = useState<Date | null>(null);
  const [contactMethod, setContactMethod] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleTaskDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(event.target.value);
  };

  const handleTaskAddressChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskAddress(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setTaskDate(date);
  };

  const handleContactMethodChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContactMethod(event.target.value);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log('Form data:', {
      taskDescription,
      taskAddress,
      taskDate,
      contactMethod,
      selectedImage,
    });
  };

  return (
    <main className="container">
      <h1 className="heading">Book your Task Master</h1>
      <textarea
        className="textarea"
        placeholder="Give a short description of the required task"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
      />
      <textarea
        className="textarea"
        placeholder="Input address where task must be performed"
        value={taskAddress}
        onChange={handleTaskAddressChange}
      />
      <DatePicker
        className="datepicker"
        selected={taskDate}
        onChange={handleDateChange}
        placeholderText="Input date when task should be performed"
        minDate={new Date()} 
      />
      <textarea
        className="textarea"
        placeholder="How would you like to be contacted"
        value={contactMethod}
        onChange={handleContactMethodChange}
      />
      <section className="file-input">
        <label htmlFor="upload">Upload a Picture</label>
        <input
          type="file"
          id="upload"
          onChange={handleImageUpload}
        />
      </section>      
      <button className="button" onClick={handleSubmit}>Send Booking</button>
    </main>
  );
};

export default Booking;

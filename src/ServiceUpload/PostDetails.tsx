import React, { useState } from "react";
import "./PostDetails.css"; 

interface PostDetailsProps {}

const PostDetails: React.FC<PostDetailsProps> = () => {
  const [formData, setFormData] = useState({
    providerName: "",
    taskDescription: "",
    cellPhone: "",
    email: "",
    openHours: "",
    closeHours: "", 
    serviceType: "Plumbing",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      serviceType: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <main className="container">
      <h1 className="heading">Fill in the details of the services you offer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="providerName">Service Provider Name</label>
        <input
          type="text"
          id="providerName"
          name="providerName"
          placeholder="Service Provider name"
          value={formData.providerName}
          onChange={handleChange}
        />

        <label htmlFor="taskDescription">Service Description</label>
        <textarea
          id="taskDescription"
          name="taskDescription"
          placeholder="Give a short description of the service you offer"
          value={formData.taskDescription}
          onChange={handleChange}
        />

        <label htmlFor="cellPhone">Phone Number</label>
        <input
          type="tel"
          id="cellPhone"
          name="cellPhone"
          placeholder="Phone number"
          value={formData.cellPhone}
          onChange={handleChange}
          maxLength={10}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Personal/Company Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="openHours">Start Time:</label>
        <input
          type="time"
          id="openHours"
          name="openHours"
          placeholder="Start Time"
          value={formData.openHours}
          onChange={handleChange}
          required
        />

        <label htmlFor="closeHours">Closing Time:</label>
        <input
          type="time"
          id="closeHours"
          name="closeHours"
          placeholder="Closing Time"
          value={formData.closeHours}
          onChange={handleChange}
          required
        />

        <label htmlFor="serviceType">Service Type</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleServiceTypeChange}
        >
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical Repairs">Electrical Repairs</option>
          <option value="Electrical Repairs">Electrical Repairs</option>
          <option value="Carpentry">Carpentry</option>
          <option value="Painting and Decorating">Painting and Decorating</option>
          <option value="Pool Work">Pool Work</option>
          <option value="Gardening">Gardening</option>

        </select>

        <button className="button" type="submit">
          Send Booking
        </button>
      </form>
    </main>
  );
};

export default PostDetails;

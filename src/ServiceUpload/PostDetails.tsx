import React, { useState } from "react";
import "./PostDetails.css"; // Import your CSS file

interface PostDetailsProps {}

const PostDetails: React.FC<PostDetailsProps> = () => {
  const [formData, setFormData] = useState({
    providerName: "",
    taskDescription: "",
    cellPhone: "",
    email: "",
    hours: "",
    serviceType: "Water",
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

        <label htmlFor="hours">Operating Hours</label>
        <input
          type="text"
          id="hours"
          name="hours"
          placeholder="Operating hours"
          value={formData.hours}
          onChange={handleChange}
        />

        <label htmlFor="serviceType">Service Type</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleServiceTypeChange}
        >
          <option value="Water">Water</option>
          <option value="Soil">Soil</option>
        </select>

        <button className="button" type="submit">
          Send Booking
        </button>
      </form>
    </main>
  );
};

export default PostDetails;

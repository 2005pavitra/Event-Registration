import React from "react";

import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    enrollmentNo: "",
    college: "",
    branch: "",
    comments: "",
  });

  const colleges = ["UIT", "SOIT"]; 
  const branches = ["CSE", "IT", "ECE", "ME", "Civil", "EE", "Automobile", "AIML", "CSBS", "CSDS"]; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Registration Successful!");
        setFormData({ name: "", email: "", whatsapp: "", enrollmentNo: "", college: "", branch: "", comments: "" });
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        {/* Name */}
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter your name"
        />

        {/* Email */}
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter your email"
        />

        {/* WhatsApp Number */}
        <label className="block mb-2">WhatsApp Number</label>
        <input
          type="tel"
          name="whatsapp"
          required
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter your WhatsApp number"
        />

        {/* Enrollment Number */}
        <label className="block mb-2">Enrollment Number</label>
        <input
          type="text"
          name="enrollmentNo"
          required
          value={formData.enrollmentNo}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter your enrollment number"
        />

        {/* College Dropdown */}
        <label className="block mb-2">College</label>
        <select
          name="college"
          required
          value={formData.college}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        >
          <option value="">Select your college</option>
          {colleges.map((college) => (
            <option key={college} value={college}>
              {college}
            </option>
          ))}
        </select>

        {/* Branch Dropdown */}
        <label className="block mb-2">Branch</label>
        <select
          name="branch"
          required
          value={formData.branch}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        >
          <option value="">Select your branch</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch}
            </option>
          ))}
        </select>

        {/* Comments Section */}
        <label className="block mb-2">What did you learn from the session?</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
          placeholder="Share your thoughts..."
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import "../Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    people: "",
    message: "",
  });
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const minDate = new Date();
  const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setSelectedDateTime(date);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.people || isNaN(Number(formData.people)) || Number(formData.people) <= 0) {
      newErrors.people = "Please enter a valid number of people.";
    }

    if (!selectedDateTime) {
      newErrors.date = "Date and time are required.";
    } else {
      const now = new Date();
      const maxDate = new Date();
      maxDate.setMonth(now.getMonth() + 1);

      if (selectedDateTime <= now || selectedDateTime > maxDate) {
        newErrors.date = "Please select a future date within 1 month.";
      } else {
        const hours = selectedDateTime.getHours();
        if (hours < 10 || hours >= 24) {
          newErrors.date = "Please select a time between 10AM and 11PM.";
        }
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length > 250) {
      newErrors.message = "Message must not exceed 250 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccessMessage("Reservation completed successfully!");
      setFormData({ name: "", people: "", message: "" });
      setSelectedDateTime(null);
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-description">
        Find us at some address at some place or call us at 05050515-122330
      </p>
      <p className="contact-note">
        <strong>FYI!</strong> We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggest criteria of them
        all, both look and taste.
      </p>
      <h2 className="form-heading">
        Reserve a table, ask for today’s special or just send us a message:
      </h2>
      {successMessage && <p className="success-text">{successMessage}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className={`form-input ${errors.name ? "error-border" : ""}`}
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
        
        <input
          type="number"
          name="people"
          className={`form-input ${errors.people ? "error-border" : ""}`}
          placeholder="How many people"
          value={formData.people}
          onChange={handleChange}
        />
        {errors.people && <p className="error-text">{errors.people}</p>}
        
        <DatePicker
          selected={selectedDateTime}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
          filterTime={(time) => {
            const hours = time.getHours();
            return hours >= 10 && hours < 24;
          }}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Select date and time"
          className={`form-input ${errors.date ? "error-border" : ""}`}
        />
        {errors.date && <p className="error-text">{errors.date}</p>}
        
        <textarea
          name="message"
          className={`form-input ${errors.message ? "error-border" : ""}`}
          placeholder="Message / Special Requirements"
          value={formData.message}
          onChange={handleChange}
          maxLength={250}
        />
        {errors.message && <p className="error-text">{errors?.message}</p>}
        
        <button type="submit" className="form-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
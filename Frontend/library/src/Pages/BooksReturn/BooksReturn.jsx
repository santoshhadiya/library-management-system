import React, { useContext, useState } from "react";
import "./BooksReturn.css";
import { userContext } from "../../Context/Context";

const BooksReturn = () => {
  const {mode}=useContext(userContext);
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    bookId: "",
    returnDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset form after submission
    setFormData({
      studentName: "",
      studentId: "",
      bookId: "",
      returnDate: ""
    });
  };

  return (
    <div className={mode=="light"?"main_body":"dark_mode"}>
      <div className="form-container">
      <h2>Book Return Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookId">Book ID:</label>
          <input
            type="text"
            id="bookId"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default BooksReturn;
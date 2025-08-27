import { useContext, useState } from "react";
import "../AddBook/AddBook.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Nav } from "../../Components/Nav/Nav";
import axios from "axios";
import { userContext } from "../../Context/Context";

export const UpdateBook = () => {
  const { MongoURL, mode, BackendURL, user } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Destructure book data passed from previous page
  const { img, title, author, desc, que, id, b_price } = location.state || {};

  // Manage form state
  const [formData, setFormData] = useState({
    b_name: title || "",
    b_id: id || "",
    b_author: author || "",
    b_price: b_price || "",
    b_desc: desc || "",
    b_quantity: que || "",
    b_img: img || "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.b_name ||
      !formData.b_id ||
      !formData.b_author ||
      !formData.b_price ||
      !formData.b_desc ||
      !formData.b_quantity ||
      !formData.b_img
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Update book
      const response = await axios.put(`${MongoURL}/update`, formData);

      if (response.status === 200) {
        alert("Book updated successfully ");
        navigate("/books");
        // Save history log
        await axios.post(`${BackendURL}/hist/update`, {
          entity_id: user.id,
          entity_type: "admin",
          book_id: formData.b_id,
          date: Date.now(),
          task: "update",
          name: user.name,
        });

        navigate("/books"); // Redirect after update
      }
    } catch (err) {
      console.error("Error updating book:", err);
      alert("Failed to update book ");
    }
  };

  return (
    <div className={mode === "light" ? "main_body" : "dark_mode"}>
      <Nav />
      <section className="add_book_section">
        <div className="book_add">
          <div className="book_add_title">
            <h2>UPDATE BOOK</h2>
          </div>
          <div className="book_add_form">
            <form onSubmit={handleFormSubmit}>
              <div className="row1">
                <div>
                  <label htmlFor="book_name">Book Name:</label>
                  <input
                    type="text"
                    id="book_name"
                    name="b_name"
                    value={formData.b_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="book_id">Book ID:</label>
                  <input
                    type="number"
                    id="book_id"
                    name="b_id"
                    value={formData.b_id}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <label htmlFor="author_name">Author Name:</label>
              <input
                type="text"
                id="author_name"
                name="b_author"
                value={formData.b_author}
                onChange={handleChange}
                required
              />

              <label htmlFor="book_price">Price:</label>
              <input
                type="number"
                id="book_price"
                name="b_price"
                value={formData.b_price}
                onChange={handleChange}
                required
              />

              <label htmlFor="book_description">Description:</label>
              <textarea
                id="book_description"
                name="b_desc"
                rows="4"
                cols="48"
                value={formData.b_desc}
                onChange={handleChange}
                required
              ></textarea>

              <label htmlFor="book_quantity">Quantity:</label>
              <input
                type="number"
                id="book_quantity"
                name="b_quantity"
                value={formData.b_quantity}
                onChange={handleChange}
                required
              />

              <label htmlFor="book_img_link">Image URL:</label>
              <input
                type="url"
                id="book_img_link"
                name="b_img"
                placeholder="Enter image URL"
                value={formData.b_img}
                onChange={handleChange}
                required
              />

              <button type="submit" id="submitBook">
                Update
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

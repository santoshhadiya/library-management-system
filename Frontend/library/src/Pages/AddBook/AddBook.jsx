import { useContext, useRef, useState } from "react";
import "./AddBook.css";
import { Link, useNavigate } from "react-router-dom";
import { Nav } from "../../Components/Nav/Nav";
import axios from "axios";
import { userContext } from "../../Context/Context";

const AddBook = () => {

  const { MongoURL, mode } = useContext(userContext)
  const navigate = useNavigate();

  const name = useRef();
  const id = useRef();
  const auth_name = useRef();
  const price = useRef();
  const desc = useRef();
  const que = useRef();
  const img = useRef();

  const handleFormValidation = async (e) => {
    e.preventDefault();

    const b_name = name.current.value.trim();
    const b_id = id.current.value;
    const b_author = auth_name.current.value.trim();
    const b_price = price.current.value;
    const b_desc = desc.current.value.trim();
    const b_que = que.current.value;
    const b_img = img.current.value.trim();

    const newBook = {
      b_name: b_name,
      b_id: b_id,
      b_author: b_author,
      b_price: b_price,
      b_desc: b_desc,
      b_quantity: b_que,
      b_img: b_img,
    };

    if (!newBook) {
      alert("Enter All Data");
      return;
    }

    /*  const books = JSON.parse(localStorage.getItem("react_books")) || [];
     books.push(newBook);
     localStorage.setItem("react_books", JSON.stringify(books));
  */

    const respons = await axios.post(MongoURL, {
      b_name: b_name,
      b_id: b_id,
      b_author: b_author,
      b_price: b_price,
      b_desc: b_desc,
      b_quantity: b_que,
      b_img: b_img,
    })

    console.log(newBook);
    alert("Books Added Succesfully!");
    name.current.value = "";
    id.current.value = "";
    auth_name.current.value = "";
    price.current.value = "";
    desc.current.value = "";
    que.current.value = "";
    img.current.value = "";
    navigate("/books");
  };

  return (
    <div className={mode == "light" ? "main_body" : "dark_mode"}>
      <Nav />
      <section className="add_book_section">
        <div className="book_add">
          <div className="book_add_title">
            <h2>ADD BOOK</h2>
          </div>
          <div className="book_add_form">
            <form onSubmit={handleFormValidation}>
            <div className="row1">
              <div>
                <label htmlFor="book_name">Book Name:</label>
                <input
                  ref={name}
                  type="text"
                  id="book_name"
                  name="book_name"
                  required
                />
              </div>
              <div>
                <label htmlFor="book_id">Book ID:</label>
                <input
                  ref={id}
                  type="number"
                  id="book_id"
                  name="book_id"
                  required
                />
              </div>
              </div>
              <label htmlFor="author_name">Author Name:</label>
              <input
                ref={auth_name}
                type="text"
                id="author_name"
                name="author_name"
                required
              />

              <label htmlFor="book_price">Price:</label>
              <input
                ref={price}
                type="number"
                id="book_price"
                name="book_price"
                required
              />

              <label htmlFor="book_description">Description:</label>
              <textarea
                ref={desc}
                id="book_description"
                name="book_description"
                rows="4"
                cols="48"
                required
              ></textarea>

              <label htmlFor="book_quantity">Quantity:</label>
              <input
                ref={que}
                type="number"
                id="book_quantity"
                name="book_quantity"
                required
              />

              <label htmlFor="book_img_link">Link of Img:</label>
              <input
                ref={img}
                type="url"
                id="book_img_link"
                name="book_img_link"
                placeholder="Enter URL"
                required
              />

              <button type="submit" id="submitBook">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddBook;
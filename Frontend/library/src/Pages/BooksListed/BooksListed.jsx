import { useContext, useEffect, useState } from "react";
import BookItem from "../../Components/BookItem/BookItem";
import "./BooksListed.css";
import { Nav } from "../../Components/Nav/Nav";
import { userContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import axios from 'axios';

const BooksListed = ({ isActive }) => {
  const { MongoURL, mode,gifImg } = useContext(userContext);

  const [books, setBooks] = useState([]);
  const [filterdBooks, setFilterdBooks] = useState([]);
  const [qury, setQury] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch 
  useEffect(() => {
    axios.get(MongoURL)
      .then((res) => {
        setBooks(res.data);
        setFilterdBooks(res.data);
        setLoading(false); // stop loading 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // stop loading on error 
      });
  }, []);

  // Search logic
  useEffect(() => {
    const filter = books.filter((val) => {
      return val && val.b_name && val.b_name.toLowerCase().includes(qury.toLowerCase());
    });
    setFilterdBooks(filter);
  }, [qury, books]);

  return (
    <div className={mode === "light" ? "main_body" : "dark_mode"}>
      <Nav />
      <div className="show_books_all_and_issued">

        <div className="search_books">
          <input
            type="text"
            id="search_books_input"
            placeholder="Search books.."
            value={qury}
            onChange={(e) => setQury(e.target.value)}
          />
        </div>

        <div className="show_books" id="show_books">
          {console.log(filterdBooks)}
          {
            loading ? (
              <>
                
                <img
                  src={gifImg}
                  alt="loading..."
                  className="loader-gif"
                  style={{
                    width: "30px",
                    height:"30px",
                    position: "relative",

                  }}
                />
              </>
            ) : filterdBooks.length > 0 ? (
              filterdBooks.map((book, index) => (
                book.b_img &&
                <BookItem
                  key={index}
                  title={book.b_name}
                  img={book.b_img}
                  id={book.b_id}
                  desc={book.b_desc}
                  que={book.b_quantity}
                  author={book.b_author}
                  b_price={book.b_price || 399}
                />

              ))
            ) : (
              <p>No Book Found "{qury}"</p>
            )
          }
        </div>

        <div className="all_books_issued_info" id="all_books_issued_info"></div>
      </div>
    </div>
  );
};

export default BooksListed;

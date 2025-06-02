import { useContext, useEffect, useState } from "react";
import BookItem from "../../Components/BookItem/BookItem";
import "./BooksListed.css";
import { Nav } from "../../Components/Nav/Nav";
import { userContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import axios from 'axios';


const BooksListed = ({isActive}) => {
 const {MongoURL,mode}=useContext(userContext);
  const [books, setBooks] = useState([]);
  const [filterdBooks,setFilterdBooks]=useState([]);
  const [qury,setQury]=useState("");


 /* Local-Host 
  useEffect(() => {
    try {
      const storedBooks = localStorage.getItem("react_books");
      var booksData = storedBooks ? JSON.parse(storedBooks) : [];
      setBooks(booksData);
      setFilterdBooks(booksData)
      console.log(booksData);
    } catch (error) {
      console.error("Invalid JSON in Local Storage:", error);
      books = [];
    }
  }, []); */

// DataBase 
    useEffect(()=>{
     axios.get(MongoURL)
     .then((res)=>{setFilterdBooks(res.data),setBooks(res.data)})
     .catch((err)=>{console.log(err)});
    },[]);
  
// Search
  useEffect(()=>{
    const filter=books.filter((val)=>{
      return val && val.b_name && val.b_name.toLowerCase().includes(qury.toLowerCase());
    })
    setFilterdBooks(filter);
  },[qury,books]);

  return (
    <div className={mode=="light"?"main_body":"dark_mode"}>
    <Nav />
      <div className="show_books_all_and_issued">
        <div className="book_header">
          <div className="available_books">
            <h1>Available Books</h1>
          </div>
          <a href="#">
            <Link to="/issue">
            <button>Issue Book</button>
            </Link>
          </a>
        </div>
        <div className="search_books">
          <input
            type="text"
            id="search_books_input"
            placeholder="Search books.."
            value={qury}
            onChange={(e)=>setQury(e.target.value)}
          />
        </div>

        <div className="show_books" id="show_books">
          {
          filterdBooks.length>0?(
            filterdBooks.map((book) => {
            return (
              book.b_img &&
              <BookItem
                title={book.b_name}
                img={book.b_img}
                id={book.b_id}
                desc={book.b_desc}
                que={book.b_quantity}
                author={book.b_author}  
              />
            );
          })):(<p>No Book Found "{qury}"</p>)
        }
        </div>

        <div className="all_books_issued_info" id="all_books_issued_info">
          {" "}
        </div>
      </div>
    </div>
  );
};

export default BooksListed;

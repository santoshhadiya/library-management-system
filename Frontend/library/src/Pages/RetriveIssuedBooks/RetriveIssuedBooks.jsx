import { useContext, useEffect, useState } from "react";
import "./RetriveIssuedBooks.css";
import IssuedBookItem from "../../Components/BookItem/IssuedBookItem";
import { Nav } from "../../Components/Nav/Nav";
import axios from "axios";
import { userContext } from "../../Context/Context";

const RetriveIssuedBooks = () => {
  const [books, setBooks] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [qury, setQury] = useState("");
  const [loading, setLoading] = useState(true); 

  const { mode,BackendURL,user,gifImg } = useContext(userContext);

  // Fetch data
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const endpoint =
        user.role == "admin"
          ? `${BackendURL}/issue/post-admin` 
          : `${BackendURL}/issue/post`;

        const res = await axios.post(endpoint,{
          s_id: user.id
        });
        console.log("API Response:", res.data);
        setBooks(res.data);
        setFilterUser(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); 
      }
    };
    fetchBook();
  }, []);

  // Search
  useEffect(() => {
    const filter = books.filter((val) => {
      return (
        val && val.name && val.name.toLowerCase().includes(qury.toLowerCase())
      );
    });
    setFilterUser(filter);
  }, [qury, books]);

  return (
    <div className={mode === "light" ? "main_body" : "dark_mode"}>
      <Nav />
      <div className="flex items-center justify-center">
        <h1 className="text-white text-xl">Your Borrowed Books <span className="bg-white/5 rounded-xl " style={{padding:"3px 20px"}}>{user.name.toUpperCase()}</span></h1>
      </div>

      <div className="retrieve_books_info" id="retrieve_books_info">
        {loading ? (
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
        ) : filterUser.length > 0 ? (
          filterUser.map((book2) => (
            <IssuedBookItem
              key={book2.b_id}
              book_id={book2.b_id}
              s_name={book2.name}
              s_id={book2.s_id}
              s_email={book2.email}
              s_department={book2.department}
              issue_date={book2.issue_date}
              due_date={book2.due_date}
              returnBookId={book2.returnBookId}
            />
          ))
        ) : (
          <p>No books on your borrowed list right now</p> // 
        )}
      </div>
    </div>
  );
};

export default RetriveIssuedBooks;

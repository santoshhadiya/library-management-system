import { useContext, useEffect, useState } from "react";
import "./RetriveIssuedBooks.css";
import IssuedBookItem from "../../Components/BookItem/IssuedBookItem";
import { Nav } from "../../Components/Nav/Nav";
import axios from "axios";
import { userContext } from "../../Context/Context";

const RetriveIssuedBooks = () => {
  const [books, setBooks] = useState([]);
  const [allbooks,setAllbooks]=useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [qury, setQury] = useState([]);
  const {mode}=useContext(userContext);

  /* useEffect(()=>{
    var issuedBooks = JSON.parse(localStorage.getItem("issueBooksData"));
    var allBooks=JSON.parse(localStorage.getItem("react_books"));
    setBooks(issuedBooks);
    setAllbooks(allBooks);
   
  },[]) */

  useEffect(()=>{
    const fetchBook=async()=>{
      axios.get("http://localhost:8001/issue")
      .then((res)=>{setBooks(res.data),setFilterUser(res.data)})
      .catch((err)=>{console.log(err)});
    }
    fetchBook();
   },[]);

   //search
   useEffect(() => {
    const filter = books.filter((val) => {
      return (
        val && val.name && val.name.toLowerCase().includes(qury.toLowerCase())
      );
    });
    setFilterUser(filter);
  }, [qury]);

  return (
    <div className={mode=="light"?"main_body":"dark_mode"}>
    <Nav/>
      <div className="available_books">
        <h1>Issued Books</h1>
      </div>
      <div className="search_books">
            <input
              type="text"
              id="search_books_input"
              placeholder="Search"
              onChange={(e) => setQury(e.target.value)}
            />
          </div>
      <div className="retrieve_books_info" id="retrieve_books_info">

        {
        filterUser.length>0?(filterUser.map((book2) => {
             
          return  <IssuedBookItem
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
        })):(<p>Data Not Found</p>)
        
        }

        
      </div>
    </div>
  );
};

export default RetriveIssuedBooks;
